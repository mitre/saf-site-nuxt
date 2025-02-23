<template>
  <div>
    <Head>
      <Title>Documentation</Title>
      <Meta
        name="description"
        content="Collection of MITRE SAF© documentation"
      />
    </Head>
    <DocumentationComponent
      :all-links="allLinks"
      :current-heading="currentHeading"
      :current-index="currentIndex"
      :current-section-title="currentSectionTitle"
      :current-subsection="currentSubsection"
      :doc-data="docData"
      :is-loaded="isLoaded"
      :table-of-contents="tableOfContents"
      :rendered-content="renderedContent"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import slugify from '@/utils/useSlugify.ts';

/// /  Data  ////
const docData = ref({});
const renderedContent = ref('');
const tableOfContents = ref([]);
const currentSectionTitle = ref('');
const currentHeading = ref('');
const allLinks = ref([]);
const currentIndex = ref(0);
const currentSubsection = ref('');
const isLoaded = ref(false);
const route = useRoute();

/// /  Methods  ////
const getData = async () => {
  docData.value = await useAsyncData('getDocumentation', () =>
    GqlGetDocumentation({href: route.params.section})
  ).then(({data}) => {
    if (!data.value || !data.value.currentDoc.data[0]) {
      return navigateTo('/docs');
    }

    // Get current document attributes
    const currentDocAttributes =
      data.value.currentDoc.data[
        data.value.currentDoc.data.findIndex((obj) =>
          obj.attributes.subsections.find(
            (obj2) => obj2.href === route.params.section
          )
        )
      ].attributes;
    const currentSubsectionIndex = currentDocAttributes.subsections.findIndex(
      (elem) => elem.href === route.params.section
    );
    currentSubsection.value =
      currentDocAttributes.subsections[currentSubsectionIndex].title;
    currentSectionTitle.value = currentDocAttributes.section_title;
    // Get the hrefs for all documentation sections
    allLinks.value = data.value.allLinks.data.flatMap(
      (num) => num.attributes.subsections
    );
    currentHeading.value = route.hash.replace(/^#+/, '');

    currentIndex.value = allLinks.value.findIndex(
      (elem) =>
        elem.title ===
        currentDocAttributes.subsections[currentSubsectionIndex].title
    );

    const {content} = currentDocAttributes.subsections[currentSubsectionIndex];

    // Parse HTML section content
    const onPage = [];
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, 'text/html');

    let currentHeader = -1;
    for (const element of htmlDoc.body.childNodes) {
      if (element.localName === 'h1') {
        onPage.push({
          title: element.outerText,
          subtitles: []
        });
        currentHeader += 1;
        element.id = slugify(element.outerText);
      }
      if (element.localName === 'h2') {
        if (currentHeader != -1) {
          onPage[currentHeader].subtitles.push(element.outerText);
          element.id = slugify(element.outerText);
        }
      }
    }

    renderedContent.value = htmlDoc.documentElement.outerHTML;
    tableOfContents.value = onPage;

    return data.value.allLinks.data.map((doc) => ({
      section_title: doc.attributes.section_title,
      subsections: doc.attributes.subsections
    }));
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getData();
    isLoaded.value = true;
  });
});

onBeforeRouteUpdate(async (to) => {
  currentHeading.value = to.hash.replace(/^#+/, '');
});
</script>
