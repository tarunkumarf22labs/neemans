// @ts-nocheck

import { useEffect } from "uelements";

function Ampstory({ setshow, data }) {
  useEffect(() => {
    const handleMutation = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          const shareControl = mutation.target.querySelector(
            ".i-amphtml-story-share-control"
          );
          console.log(shareControl);

          if (shareControl) {
            shareControl.style.display = "none";
          }
        }
      }
    };

    const observer = new MutationObserver(handleMutation);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <amp-story
      standalone
      title="My Story"
      publisher="The AMP Team"
      publisher-logo-src="https://example.com/logo/1x1.png"
      poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
      poster-square-src="https://example.com/my-story/poster/1x1.jpg"
      poster-landscape-src="https://example.com/my-story/poster/4x3.jpg"

      // publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
      // poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
      // poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
      // poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
    >

      <div className="plugin__header">
        <nav style={{ display : 'flex' , alignItems : 'center'  }} >
          {" "}
          <img src={data.image} alt=""  className="plugin__header__img" />
          <h6>{data.name}</h6>{" "}
        </nav>


        <svg
         onClick={() => setshow((prev)  => !prev)}
          className="plugin_icon"
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5306 7.53063L11.0603 10L13.5306 12.4694C13.6003 12.5391 13.6556 12.6218 13.6933 12.7128C13.731 12.8039 13.7504 12.9015 13.7504 13C13.7504 13.0985 13.731 13.1961 13.6933 13.2872C13.6556 13.3782 13.6003 13.4609 13.5306 13.5306C13.4609 13.6003 13.3782 13.6556 13.2872 13.6933C13.1961 13.731 13.0986 13.7504 13 13.7504C12.9015 13.7504 12.8039 13.731 12.7128 13.6933C12.6218 13.6556 12.5391 13.6003 12.4694 13.5306L10 11.0603L7.53063 13.5306C7.46095 13.6003 7.37822 13.6556 7.28718 13.6933C7.19613 13.731 7.09855 13.7504 7 13.7504C6.90146 13.7504 6.80388 13.731 6.71283 13.6933C6.62179 13.6556 6.53906 13.6003 6.46938 13.5306C6.3997 13.4609 6.34442 13.3782 6.30671 13.2872C6.269 13.1961 6.24959 13.0985 6.24959 13C6.24959 12.9015 6.269 12.8039 6.30671 12.7128C6.34442 12.6218 6.3997 12.5391 6.46938 12.4694L8.93969 10L6.46938 7.53063C6.32865 7.38989 6.24959 7.19902 6.24959 7C6.24959 6.80098 6.32865 6.61011 6.46938 6.46937C6.61011 6.32864 6.80098 6.24958 7 6.24958C7.19903 6.24958 7.3899 6.32864 7.53063 6.46937L10 8.93969L12.4694 6.46937C12.5391 6.39969 12.6218 6.34442 12.7128 6.3067C12.8039 6.26899 12.9015 6.24958 13 6.24958C13.0986 6.24958 13.1961 6.26899 13.2872 6.3067C13.3782 6.34442 13.4609 6.39969 13.5306 6.46937C13.6003 6.53906 13.6556 6.62178 13.6933 6.71283C13.731 6.80387 13.7504 6.90145 13.7504 7C13.7504 7.09855 13.731 7.19613 13.6933 7.28717C13.6556 7.37822 13.6003 7.46094 13.5306 7.53063ZM19.75 10C19.75 11.9284 19.1782 13.8134 18.1068 15.4168C17.0355 17.0202 15.5127 18.2699 13.7312 19.0078C11.9496 19.7458 9.98919 19.9389 8.09787 19.5627C6.20656 19.1865 4.46928 18.2579 3.10571 16.8943C1.74215 15.5307 0.813554 13.7934 0.437348 11.9021C0.061142 10.0108 0.254225 8.05042 0.992179 6.26884C1.73013 4.48726 2.97982 2.96451 4.58319 1.89317C6.18657 0.821828 8.07164 0.25 10 0.25C12.585 0.25273 15.0634 1.28084 16.8913 3.10872C18.7192 4.93661 19.7473 7.41498 19.75 10ZM18.25 10C18.25 8.3683 17.7661 6.77325 16.8596 5.41655C15.9531 4.05984 14.6646 3.00242 13.1571 2.37799C11.6497 1.75357 9.99085 1.59019 8.39051 1.90852C6.79017 2.22685 5.32016 3.01259 4.16637 4.16637C3.01259 5.32015 2.22685 6.79016 1.90853 8.3905C1.5902 9.99085 1.75358 11.6496 2.378 13.1571C3.00242 14.6646 4.05984 15.9531 5.41655 16.8596C6.77326 17.7661 8.36831 18.25 10 18.25C12.1873 18.2475 14.2843 17.3775 15.8309 15.8309C17.3775 14.2843 18.2475 12.1873 18.25 10Z"
            fill="white"
          />
        </svg>
      </div>
      <amp-story-page id="page-1">
        <amp-story-grid-layer template="fill">
          <amp-img
            src={data.largeimg}
            width="720"
            height="1280"
            layout="responsive"
          ></amp-img>
             {/*  */}

             

        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical"></amp-story-grid-layer>
      </amp-story-page>


     
  
      {/* <amp-story-page id="page-9">
      <amp-story-grid-layer template="fill">
        <amp-video autoplay loop
              width="720"
              height="960"
              poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
              layout="responsive">
              <source src="https://amp.dev/static/samples/video/story_video_dog.mp4" type="video/mp4"/>
        </amp-video>
      </amp-story-grid-layer>
    </amp-story-page>


    <amp-story-page id="animation-demo">
      <amp-story-grid-layer template="fill">
        <amp-img src="https://amp.dev/static/samples/img/story_dog4.jpg"
                 animate-in="fly-in-top"
                 width="720" height="1280"
                 layout="responsive"
                 alt="...">
        </amp-img>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="thirds">
        <h2 animate-in="fly-in-bottom"
            grid-area="lower-third"
            animate-in-delay="0.4s">
          Best walk ever!
        </h2>
      </amp-story-grid-layer>
    </amp-story-page>

    <amp-story-page id="layout-demo">
      <amp-story-grid-layer template="thirds">
        <amp-img grid-area="upper-third"
                 src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
                 width="560" height="420"
                 layout="responsive"
                 alt="...">
        </amp-img>
        <amp-img grid-area="middle-third"
                 src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
                 width="560" height="420"
                 layout="responsive"
                 alt="...">
        </amp-img>
        <amp-img grid-area="lower-third"
                 src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
                 width="560"
                 height="420"
                 layout="responsive"
                 alt="...">
        </amp-img>
      </amp-story-grid-layer>
    </amp-story-page>

  


    <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
    </amp-story-bookend> */}
    </amp-story>
  );
}

export default Ampstory;
