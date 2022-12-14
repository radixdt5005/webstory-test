<template>
  <main class="webStoryTemplate contentWhite">
    <amp-story
      standalone
      title="photohifi"
      publisher="photohifi"
      publisher-logo-src="https://via.placeholder.com/150"
      poster-portrait-src="https://via.placeholder.com/150"
    >
      <template v-for="item in data.dynamicResult">
        <amp-story-page id="cover" auto-advance-after="5s">
          <amp-story-grid-layer template="fill">
            <amp-img
              :src="item.BGImage.url"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds" class="bottom">
            <div grid-area="upper-third" class="Coverheader-logo">
              <amp-img
                src="https://via.placeholder.com/150"
                width="454"
                height="460"
                layout="responsive"
              ></amp-img>
            </div>
            <div grid-area="lower-third">
              <h1 animate-in="fade-in">{{ item.Title }}</h1>
            </div>
            <!-- <div
          v-if="item.CTA"
          v-html="$md.render(item.CTA)"
        ></div> -->
          </amp-story-grid-layer>
        </amp-story-page>
        <template v-for="key in item.StoriesList">
          <amp-story-page
            v-if="key.VueReferenceCode !== 'LastSlide'"
            :id="key.Displayorder"
            layout="container"
            class="container"
            :class="key.Displayorder"
            auto-advance-after="5s"
          >
            <div class="header-logo">
              <amp-img
                src="https://via.placeholder.com/150"
                width="454"
                height="460"
                layout="responsive"
              ></amp-img>
            </div>
            <amp-story-grid-layer template="vertical">
              <h1 animate-in="scale-fade-up">{{ key.Title }}</h1>
              <p>{{ key.SubTitle }}</p>
              <div class="enosa">
                <amp-img
                  animate-in="fade-in"
                  animate-in-delay="0.3s"
                  animate-in-duration="0.5s"
                  :src="key.Icon && key.Icon.url"
                  width="720"
                  height="1040"
                  layout="responsive"
                >
                </amp-img>
              </div>
              <div animate-in="scale-fade-up" v-html="key.LongText"></div>
              <p class="footer-link">
                <a href="/"> www.photohifi.com</a>
              </p>
            </amp-story-grid-layer>
          </amp-story-page>
          <amp-story-page
            v-if="key.VueReferenceCode === 'LastSlide'"
            id="page6"
            layout="container"
            class="container"
          >
            <amp-story-grid-layer template="fill">
              <amp-img
                :src="key.Image && key.Image.url"
                width="720"
                height="1280"
                layout="responsive"
              >
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="text-center">
              <div>
                <amp-img
                  src="https://via.placeholder.com/150"
                  width="80"
                  height="82"
                  layout="fixed"
                ></amp-img>
              </div>
              <div class="content">
                <h3 class="h3_sm" animate-in="fade-in">{{ key.Title }}</h3>
              </div>
              <div class="content" animate-in="fade-in" layout="container">
                <p animate-in="fade-in" class="mt-4">
                  {{ key.SubTitle }}
                </p>
              </div>
              <div class="content">
                <a href="/contact-us" class="webStory-btn">Get in Touch</a>
              </div>
              <div class="content">
                <a href="/"> www.photohifi.com</a>
              </div>
            </amp-story-grid-layer>
          </amp-story-page>
        </template>
        <!-- Bookend -->
        <amp-story-bookend
          src="bookend.json"
          layout="nodisplay"
        ></amp-story-bookend>
      </template>
    </amp-story>
  </main>
</template>
    
    <script>
export default {
  data() {
    return {
      data: {
        id: 1981,
        CollectionType: "WebsiteStories",
        Field: "NavURL",
        Value: "/webstories/best-devops-tools",
        VueReferenceCode: "WebStory_TemplateOne",
        Limit: "10",
        TitleReferenceCode: "D",
        dynamic: { id: 1, title: "Main cover Page title goes here" },
        dynamicResult: [
          {
            Title: "Cover page title",
            LongText: [
              "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>",
              "",
            ],
            DisplayOrder: "cover",
            CTA: '[www.photohifi.com](/ "www.photohifi.com")',
            Image: {
              id: 12363,
              name: "The-Substantial-Impact-of-DevOps-Implementation-Steps-World-Wide.jpg",
              alternativeText:
                "The Substantial Impact of DevOps Implementation Steps World-Wide ",
              width: 700,
              height: 516,
              hash: "The_Substantial_Impact_of_Dev_Ops_Implementation_Steps_World_Wide_99c5b846a4",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 66.7,
              url: "https://via.placeholder.com/150",
            },
            BGImage: {
              id: 14089,
              name: "Why_Trust_photohifi_for_Saa_S_Business_Development_edd8aa45c2.jpg",
              width: 1920,
              height: 1050,
              hash: "Why_Trust_photohifi_for_Saa_S_Business_Development_edd8aa45c2_be78af73ad",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 96.29,
              url: "https://via.placeholder.com/150",
            },
            NavURL: "/webstories/best-devops-tools",
            StoriesList: [
              {
                id: 107,
                Title: "1. Story slide title",
                SubTitle: "Subtitle Slide",
                LongText: [
                  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
                  "",
                ],
                VueReferenceCode: "TCMWithTCML",
                Displayorder: "page1",
                TitleContentMediaList: [],
                Icon: {
                  id: 13997,
                  name: "git.svg",
                  width: 248,
                  height: 248,
                  hash: "git_0f0d373f14",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 1.35,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
              {
                id: 108,
                Title: "2. Story slide title",
                SubTitle: "Subtitle Slide",
                LongText: [
                  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
                  "",
                ],
                VueReferenceCode: "TCMWithTCML",
                Displayorder: "page2",
                TitleContentMediaList: [],
                Icon: {
                  id: 13998,
                  name: "docker.svg",
                  width: 224,
                  height: 145,
                  hash: "docker_798562fefe",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 10.76,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
              {
                id: 109,
                Title: "3. Story slide title",
                SubTitle: "Subtitle Slide",
                LongText: [
                  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
                  "",
                ],
                VueReferenceCode: "TCMWithTCML",
                Displayorder: "page3",
                TitleContentMediaList: [],
                Icon: {
                  id: 13999,
                  name: "teraform.svg",
                  width: 239,
                  height: 272,
                  hash: "teraform_2b0e53eb23",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 0.84,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
              {
                id: 110,
                Title: "4. Story slide title",
                SubTitle: "Subtitle Slide",
                LongText: [
                  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
                  "",
                ],
                VueReferenceCode: "TCMWithTCML",
                Displayorder: "page4",
                TitleContentMediaList: [],
                Icon: {
                  id: 14000,
                  name: "Kubernetes.svg",
                  width: 134,
                  height: 131,
                  hash: "Kubernetes_f7462b799f",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 6.88,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
              {
                id: 111,
                Title: "5. Story slide title",
                SubTitle: "Subtitle Slide",
                LongText: [
                  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
                  "",
                ],
                VueReferenceCode: "TCMWithTCML",
                Displayorder: "page5",
                TitleContentMediaList: [],
                Icon: {
                  id: 14001,
                  name: "Jenkins.svg",
                  width: 226,
                  height: 312,
                  hash: "Jenkins_2c56b9eccc",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 24.4,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
              {
                id: 112,
                Title: "Story slide title",
                SubTitle: "Last Story slide title",
                VueReferenceCode: "LastSlide",
                CTA: '[www.photohifi.com](/ "www.photohifi.com")',
                Displayorder: "page6",
                TitleContentMediaList: [],
                Image: {
                  id: 13755,
                  name: "Why-Trust-photohifi-for-SaaS-Business-Development.jpg",
                  alternativeText:
                    "Why Trust photohifi for SaaS Business Development",
                  width: 1920,
                  height: 1050,
                  hash: "Why_Trust_photohifi_for_Saa_S_Business_Development_edd8aa45c2",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 104.5,
                  url: "https://via.placeholder.com/150",
                },
                ImageCollection: [],
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    var ampvideo = document.createElement("script");
    ampvideo.setAttribute(
      "src",
      "https://cdn.ampproject.org/v0/amp-story-1.0.js"
    );
    ampvideo.setAttribute("custom-element", "amp-story");
    document.head.appendChild(ampvideo);
    var ampstory = document.createElement("script");
    ampstory.setAttribute(
      "src",
      "https://cdn.ampproject.org/v0/amp-video-0.1.js"
    );
    ampstory.setAttribute("custom-element", "amp-story");
    document.head.appendChild(ampstory);
    var amp = document.createElement("script");
    amp.setAttribute("src", "https://cdn.ampproject.org/v0.js");
    amp.setAttribute("custom-element", "amp-story");
    document.head.appendChild(amp);
  },
};
</script>
    
    <style lang="css">
@media only screen and (max-width: 575px) {
  body .webStoryTemplate .container {
    max-width: 100%;
  }
}
amp-story {
  color: #fff;
}
amp-story-page {
  background-color: #000;
}
.content {
  margin: 1.125rem 0rem;
}
q {
  font-weight: 300;
  font-size: 1.1em;
}
amp-story-grid-layer.bottom {
  align-content: end;
}
amp-story-grid-layer.noedge {
  padding: 0px;
}
amp-story-grid-layer.center-text {
  align-content: center;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.banner-text {
  text-align: center;
  background-color: #000;
  line-height: 2em;
}
.page1 {
  background-color: #f44d27;
}
.page2 {
  background-color: #003f8c;
}
.page3 {
  background-color: #844fba;
}
.page4 {
  background-color: #316ce6;
}
.page5 {
  background-color: #d33833;
}
.enosa {
  height: 34.5%;
  left: 4.17%;
  top: 30.83%;
  width: 56.28%;
}
.page2-image {
  height: 32.17%;
  left: 7.5%;
  top: 31%;
  width: 53.02%;
}
.footer-link {
  text-align: right;
}
.header-logo {
  height: 4.78em;
  left: 89.3%;
  top: 9.47%;
  width: 2.71em;
  position: absolute;
}
.Coverheader-logo {
  height: 4.78em;
  left: 89%;
  top: -11%;
  width: 2.71em;
  position: absolute;
}
.header-logo amp-img {
  transform: translateX(-50%) translateY(-50%);
}
</style>