import React from 'react';

import SEO from '../components/seo';
import Host from '../components/Host';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';

import anchorPNG from '../images/anchor.png';
import rssPNG from '../images/rss.png';
import GooglePodcasts from '../components/icons/GooglePodcasts';
import ApplePodcasts from '../components/icons/ApplePodcasts';
import HeroImage from '../components/HeroImage';
import getEpSlug from '../utils/getEpSlug';

function IndexPage({ data }) {
  const episodes = data.allAnchorEpisode.edges.filter(({ node }) => node.title !== `0. Trailer`);
  return (
    <>
      <SEO
        keywords={[`podcast`, `beginner`, `developer`, `learning curve`, `dev podcast`]}
        title="Home"
      />

      <section className="text-center">
        <HeroImage />

        <p className="text-lg my-8 p-3 text-gray-900">
          Ease the curve as we share what we are learning. 📈
          <br />
          🎙 An informal conversation between UX Thinker and a JS Dev.
        </p>

        <div className="flex flex-col sm:flex-row justify-around">
          <a
            aria-label="Spotify"
            className="bg-transparent py-2 px-4 mt-2 mx-auto h-12 sm:m-0 rounded-full border-2 border-white hover:bg-white focus:bg-white"
            href="https://open.spotify.com/show/3mWV1OZ9SFVs34E2GGdoUd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              height="29"
              viewBox="0 0 96 29"
              width="96"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <polygon points="28.584448 28.5984783 0 28.5984783 0 14.3430036 0 0.0873586957 28.584448 0.0873586957"></polygon>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-446 -503)">
                  <g transform="translate(328 494)">
                    <g transform="translate(37 9)">
                      <g transform="translate(81.04)">
                        <g>
                          <g>
                            <mask fill="#fff">
                              <use xlinkHref="#path-1"></use>
                            </mask>
                            <path
                              d="M22.7464533,12.7296775 C18.1394773,9.99976087 10.5403733,9.74875362 6.142464,11.0805906 C5.43607467,11.2944746 4.68923733,10.8966775 4.475392,10.1920181 C4.26120533,9.48684783 4.65954133,8.74217029 5.366272,8.52794565 C10.4149333,6.99891304 18.807296,7.29419565 24.1109333,10.4355326 C24.7463253,10.8118732 24.9545387,11.6304565 24.578048,12.2632536 C24.201216,12.8970725 23.3801387,13.1060181 22.7464533,12.7296775 Z M22.595584,16.7730399 C22.2723413,17.2963406 21.5866027,17.4605 21.0628267,17.139163 C17.222144,14.7835435 11.3652053,14.1010217 6.82120533,15.4773043 C6.232064,15.6549167 5.60964267,15.3235326 5.43061333,14.7365435 C5.25312,14.1487029 5.585408,13.5288478 6.173696,13.3500435 C11.3645227,11.7782681 17.8176,12.5394638 22.228992,15.2445181 C22.752768,15.5663659 22.917632,16.2509312 22.595584,16.7730399 Z M20.8467627,20.6561594 C20.5899093,21.0764348 20.0415573,21.2080688 19.621888,20.9519529 C16.265728,18.9052391 12.0413867,18.4430725 7.06645333,19.5768623 C6.58705067,19.686529 6.109184,19.3868188 5.99995733,18.9086449 C5.890048,18.4303007 6.18939733,17.9534891 6.669824,17.8443333 C12.1140907,16.6025797 16.7840427,17.1369493 20.551168,19.4338188 C20.9711787,19.6897645 21.1034453,20.2372464 20.8467627,20.6561594 Z M14.2921387,0.0873586957 C6.398976,0.0873586957 0,6.47203623 0,14.3477717 C0,22.2243587 6.398976,28.6086957 14.2921387,28.6086957 C22.1856427,28.6086957 28.584448,22.2243587 28.584448,14.3477717 C28.584448,6.47203623 22.1856427,0.0873586957 14.2921387,0.0873586957 L14.2921387,0.0873586957 Z"
                              fill="#1ED760"
                              fillRule="nonzero"
                              mask="url(#mask-2)"
                            ></path>
                          </g>
                          <path
                            d="M39.6866132,12.7666929 C37.2573877,12.1767082 36.8247376,11.7627439 36.8247376,10.8930768 C36.8247376,10.0711353 37.5846897,9.51827062 38.7147886,9.51827062 C39.8102755,9.51827062 40.8965213,9.938222 42.0353573,10.8027573 C42.0699693,10.8289295 42.1129823,10.8395352 42.1554912,10.8326928 C42.1980001,10.8261925 42.2356365,10.8024152 42.2605033,10.7664927 L43.4468888,9.06410732 C43.4956144,8.99414394 43.4821729,8.89749525 43.4164773,8.84378253 C42.0612323,7.73651359 40.5347754,7.19818895 38.7507447,7.19818895 C36.1276249,7.19818895 34.2955406,8.80084656 34.2955406,11.0939008 C34.2955406,13.553054 35.8759317,14.4235764 38.6072561,15.0956696 C40.9319734,15.6408367 41.3244669,16.0975659 41.3244669,16.9140334 C41.3244669,17.8187678 40.531079,18.3813829 39.2542991,18.3813829 C37.8362148,18.3813829 36.6795688,17.8948893 35.3856509,16.7542638 C35.3535592,16.7260389 35.3095381,16.7130384 35.2688774,16.7154332 C35.2260324,16.7191965 35.1868839,16.7392105 35.1596647,16.7727382 L33.8296226,18.3841198 C33.7738402,18.4510042 33.780897,18.550903 33.8454165,18.6088922 C35.3508709,19.9771981 37.2024454,20.699925 39.2005329,20.699925 C42.0271243,20.699925 43.8536639,19.1273739 43.8536639,16.6938797 C43.8536639,14.6370588 42.6466121,13.4995123 39.6866132,12.7666929 L39.6866132,12.7666929 Z M52.3005065,15.5231476 C52.3005065,17.259916 51.2495447,18.4718734 49.7450984,18.4718734 C48.2576221,18.4718734 47.1354201,17.2048348 47.1354201,15.5231476 C47.1354201,13.8418026 48.2576221,12.5745929 49.7450984,12.5745929 C51.2253499,12.5745929 52.3005065,13.814262 52.3005065,15.5231476 Z M50.2486528,10.3272116 C49.0234548,10.3272116 48.0185304,10.8184948 47.1896904,11.8251807 L47.1896904,10.6920818 C47.1896904,10.6027886 47.1184501,10.5299172 47.030744,10.5299172 L44.855396,10.5299172 C44.7676898,10.5299172 44.6964495,10.6027886 44.6964495,10.6920818 L44.6964495,23.2825832 C44.6964495,23.3718763 44.7676898,23.4447477 44.855396,23.4447477 L47.030744,23.4447477 C47.1184501,23.4447477 47.1896904,23.3718763 47.1896904,23.2825832 L47.1896904,19.308355 C48.0186984,20.2553411 49.0236228,20.7178863 50.2486528,20.7178863 C52.5251485,20.7178863 54.8297035,18.9337344 54.8297035,15.5231476 C54.8297035,12.1118766 52.5251485,10.3272116 50.2486528,10.3272116 L50.2486528,10.3272116 Z M60.7369318,18.4900058 C59.1773751,18.4900058 58.0017429,17.2144141 58.0017429,15.5231476 C58.0017429,13.8248677 59.1367144,12.5922121 60.7009756,12.5922121 C62.2702774,12.5922121 63.4539746,13.8678037 63.4539746,15.5602676 C63.4539746,17.2583765 62.3112742,18.4900058 60.7369318,18.4900058 Z M60.7369318,10.3272116 C57.8049921,10.3272116 55.5083341,12.6257397 55.5083341,15.5602676 C55.5083341,18.4629783 57.7893663,20.737216 60.7009756,20.737216 C63.6431645,20.737216 65.9468794,18.4465566 65.9468794,15.5231476 C65.9468794,12.6094891 63.6589583,10.3272116 60.7369318,10.3272116 L60.7369318,10.3272116 Z M72.2076207,10.5299172 L69.8140154,10.5299172 L69.8140154,8.0380917 C69.8140154,7.94879858 69.7429431,7.87592718 69.655069,7.87592718 L67.480057,7.87592718 C67.3920148,7.87592718 67.3206065,7.94879858 67.3206065,8.0380917 L67.3206065,10.5299172 L66.2745173,10.5299172 C66.1869792,10.5299172 66.116243,10.6027886 66.116243,10.6920818 L66.116243,12.5954622 C66.116243,12.6847553 66.1869792,12.7577978 66.2745173,12.7577978 L67.3206065,12.7577978 L67.3206065,17.6827754 C67.3206065,19.6730541 68.2934392,20.6821348 70.2125575,20.6821348 C70.9928399,20.6821348 71.6402189,20.5182597 72.2502976,20.1658769 C72.2998634,20.137652 72.3306109,20.0834261 72.3306109,20.0254369 L72.3306109,18.2130602 C72.3306109,18.1571237 72.3020476,18.1042663 72.2551702,18.0750151 C72.2076207,18.0445665 72.1488139,18.043198 72.1002562,18.0676595 C71.6810477,18.2823394 71.2759527,18.3813829 70.8233083,18.3813829 C70.1253554,18.3813829 69.8140154,18.0587644 69.8140154,17.3356954 L69.8140154,12.7577978 L72.2076207,12.7577978 C72.2954948,12.7577978 72.3663991,12.6847553 72.3663991,12.5954622 L72.3663991,10.6920818 C72.3663991,10.6027886 72.2954948,10.5299172 72.2076207,10.5299172 L72.2076207,10.5299172 Z M80.5477709,10.5394966 L80.5477709,10.2334709 C80.5477709,9.33318411 80.8866661,8.93170718 81.6472902,8.93170718 C82.1006068,8.93170718 82.464873,9.02339513 82.8729922,9.16195343 C82.9232301,9.17803303 82.9756521,9.16999323 83.0164809,9.13937356 C83.0583177,9.10875389 83.0821765,9.05965977 83.0821765,9.00782871 L83.0821765,7.14139716 C83.0821765,7.07023635 83.0369792,7.00694429 82.9696034,6.98607502 C82.5386335,6.85555653 81.9873616,6.72144578 81.161546,6.72144578 C79.1523692,6.72144578 78.0904862,7.87353234 78.0904862,10.0514635 L78.0904862,10.5201668 L77.0454051,10.5201668 C76.957699,10.5201668 76.8857866,10.5930382 76.8857866,10.6823314 L76.8857866,12.5954622 C76.8857866,12.6847553 76.957699,12.7577978 77.0454051,12.7577978 L78.0904862,12.7577978 L78.0904862,20.3543846 C78.0904862,20.4438488 78.1612224,20.5167202 78.2489285,20.5167202 L80.4242766,20.5167202 C80.5121507,20.5167202 80.583727,20.4438488 80.583727,20.3543846 L80.583727,12.7577978 L82.6145783,12.7577978 L85.7259627,20.3523319 C85.3726178,21.1504961 85.0254896,21.3090683 84.5513387,21.3090683 C84.1680863,21.3090683 83.7643355,21.1925767 83.3518477,20.9628437 C83.3128672,20.9411191 83.2669979,20.9373558 83.225161,20.9506984 C83.1836602,20.9655806 83.1485442,20.9970556 83.1310701,21.0381099 L82.3936327,22.6849009 C82.3585166,22.762733 82.3885921,22.8540789 82.4621846,22.8944489 C83.2318818,23.3188479 83.9266423,23.5 84.7853898,23.5 C86.3916559,23.5 87.2794707,22.7382715 88.0621054,20.6889772 L91.8359906,10.7605056 C91.8549768,10.7107273 91.8492641,10.6542776 91.8191886,10.6099731 C91.7894492,10.5660108 91.7410596,10.5394966 91.6883015,10.5394966 L89.4239031,10.5394966 C89.3560233,10.5394966 89.2953683,10.5834589 89.2731897,10.6482905 L86.9533449,17.3943689 L84.4123866,10.6438429 C84.3890319,10.5810641 84.329721,10.5394966 84.2636893,10.5394966 L80.5477709,10.5394966 L80.5477709,10.5394966 Z M75.7126747,10.5299172 L73.5374947,10.5299172 C73.4496206,10.5299172 73.3780443,10.6027886 73.3780443,10.6920818 L73.3780443,20.3543846 C73.3780443,20.4438488 73.4496206,20.5167202 73.5374947,20.5167202 L75.7126747,20.5167202 C75.8003809,20.5167202 75.8721252,20.4438488 75.8721252,20.3543846 L75.8721252,10.6920818 C75.8721252,10.6027886 75.8003809,10.5299172 75.7126747,10.5299172 L75.7126747,10.5299172 Z M74.636174,6.13043478 C73.7744022,6.13043478 73.0751052,6.84067434 73.0751052,7.71803915 C73.0751052,8.59591713 73.7744022,9.30701199 74.636174,9.30701199 C75.4976098,9.30701199 76.1962347,8.59591713 76.1962347,7.71803915 C76.1962347,6.84067434 75.4976098,6.13043478 74.636174,6.13043478 L74.636174,6.13043478 Z M93.7823281,11.4909302 L93.3836179,11.4909302 L93.3836179,12.0083856 L93.7823281,12.0083856 C93.9812631,12.0083856 94.1000529,11.909342 94.1000529,11.7495724 C94.1000529,11.5812497 93.9812631,11.4909302 93.7823281,11.4909302 Z M94.040574,12.2290525 L94.4737282,12.8464067 L94.1086219,12.8464067 L93.7188167,12.2801993 L93.3836179,12.2801993 L93.3836179,12.8464067 L93.0779905,12.8464067 L93.0779905,11.2103924 L93.7945935,11.2103924 C94.1679327,11.2103924 94.4135772,11.4048872 94.4135772,11.7321243 C94.4135772,12.0003458 94.2613516,12.1642209 94.040574,12.2290525 Z M93.7011747,10.6659096 C92.9171958,10.6659096 92.3237511,11.3005408 92.3237511,12.0776647 C92.3237511,12.8542754 92.9128273,13.4805247 93.6932777,13.4805247 C94.4770885,13.4805247 95.0710374,12.8464067 95.0710374,12.0687696 C95.0710374,11.2919879 94.4816251,10.6659096 93.7011747,10.6659096 Z M93.6932777,13.63636 C92.832346,13.63636 92.1624524,12.9324496 92.1624524,12.0776647 C92.1624524,11.2228798 92.841083,10.5109296 93.7011747,10.5109296 C94.5621064,10.5109296 95.232,11.2146689 95.232,12.0687696 C95.232,12.9237256 94.5538734,13.63636 93.6932777,13.63636 L93.6932777,13.63636 Z"
                            fill="#1ED760"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            aria-label="Anchor"
            className="bg-transparent py-2 px-4 mt-2 mx-auto h-12 sm:m-0 rounded-full border-2 border-white hover:bg-white focus:bg-white flex items-center"
            href="https://anchor.fm/learningcurve"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Anchor logo" src={anchorPNG} style={{ width: 100 }} />
          </a>
          <a
            aria-label="Google Podcasts"
            className="bg-transparent py-2 px-4 mt-2 mx-auto h-12 sm:m-0 rounded-full border-2 border-white hover:bg-white focus:bg-white flex items-center"
            href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zOWQ5YjE0L3BvZGNhc3QvcnNz"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GooglePodcasts width="100" />
          </a>
          <a
            aria-label="Apple Podcasts"
            className="bg-transparent py-2 px-4 mt-2 mx-auto h-12 sm:m-0 rounded-full border-2 border-white hover:bg-white focus:bg-white flex items-center"
            href="https://podcasts.apple.com/in/podcast/learning-curve/id1492930419"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ApplePodcasts width="100" />
          </a>
          <a
            className="bg-transparent py-2 px-4 mt-2 mx-auto h-12 sm:m-0 rounded-full border-2 border-white hover:bg-white focus:bg-white flex items-center"
            href="https://anchor.fm/s/39d9b14/podcast/rss"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="rss" className="w-4 mr-2" src={rssPNG} />
            <span className="text-gray-800">RSS</span>
          </a>
        </div>

        <h3 className="mt-8 uppercase text-sm font-bold text-gray-700">Hosts</h3>
        <div className="flex sm:flex-row sm:justify-between sm:max-w-lg flex-col max-w-xs mx-auto">
          <Host name="@brittikbasu" role="UX Thinker" twitter="brittikbasu" />
          <Host name="@aravindballa" role="Javascript Dev" twitter="aravindballa" />
        </div>
      </section>
      <section className="my-12">
        <h3 className="uppercase text-sm font-bold text-gray-700 text-center">Episodes</h3>
        <div className="max-w-3xl mx-auto">
          {episodes.map(({ node: episode }) => {
            const content = episode.content.match(/<p>.*?<\/p>.*/)
              ? episode.content.match(/<p>(.*?)<\/p>.*/)[1]
              : episode.content;
            return (
              <motion.div
                className="bg-background-light text-foreground mt-4 p-4 bg-white rounded-lg border border-background hover:border-gray-500 flex"
                key={episode.id}
                magic
                magicId={episode.id}
              >
                <img
                  src={episode.itunes.image}
                  alt={`${episode.title} cover`}
                  className="w-64 h-64 mr-4 rounded"
                  width="256"
                  height="256"
                />
                <div>
                  <p className="text-xs font-bold m-0 text-gray-600">EP {episode.itunes.episode}</p>
                  <h4 className="font-bold text-lg">
                    <Link className="text-purple-800" to={getEpSlug(episode)}>
                      {episode.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600">
                    {new Date(episode.pubDate).toLocaleString(`en-US`, {
                      month: `long`,
                      day: `2-digit`,
                      year: `numeric`,
                    })}
                  </p>
                  <div
                    className="text-gray-800 mt-4"
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default IndexPage;

export const query = graphql`
  query AnchorEpisodes {
    allAnchorEpisode(sort: { order: DESC, fields: isoDate }) {
      edges {
        node {
          id
          title
          content
          pubDate
          enclosure {
            length
            url
          }
          itunes {
            episode
            image
          }
        }
      }
    }
  }
`;
