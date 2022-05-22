/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Container,
  ThemeProvider,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "theme-ui";
import theme from "theme";
import PrivacyLayout from "components/privacy-policy/PrivacyLayout";
import SEO from "components/seo";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

const PrivacyPolicy = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrivacyLayout>
        <SEO title="TECHOMODɅ | PRIVACY POLICY" />
        <section sx={styles.banner} id="home">
          <Container sx={styles.banner.container}>
            <Box sx={styles.banner.contentBox}>
              <Heading as="h1" variant="heroPrimary">
                Privacy Policy
              </Heading>
              {data.map((item, i) => (
                <Box key={i} sx={styles.banner.contentBoxItems}>
                  <Heading as="h4">{item.title}</Heading>
                  <Text as="p">{item.body}</Text>
                </Box>
              ))}
            </Box>
          </Container>
        </section>
      </PrivacyLayout>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 100,
      left: 0,
      height: "75%",
      width: "50%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      height: "75%",
      width: "50%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
      padding: "20px",
    },
    contentBoxItems: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "start",
      mb: ["40px", null, null, null, null, 7],
    },
  },
};

const data = [
  {
    title: "Who we are",
    body:
      "This website is operated by Techomoda and (“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us. This policy sets out how we process any personal data we collect from you or that you provide to us through our website. We confirm that we will keep your information secure and that we will comply fully with all applicable UK Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit this site. By visiting www.techomoda.com or techomoda.com (our website) you are accepting and consenting to the practices described in this policy.",
  },
  {
    title: "What personal data we collect and why we collect it",
    body:
      "We may collect, store and use the following kinds of personal information about individuals who visit and use our website:",
  },
  {
    title: "Comments",
    body:
      "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.",
  },
  {
    title: "Media",
    body:
      "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.",
  },
  {
    title: "Contact forms",
    body:
      "Information you supply to us. You may supply us with information about you by filling in forms on our website. This includes information you provide when you submit a contact/enquiry/booking form like contact form, appointment booking form, etc. on our website. The information you give us may include your name, address, e-mail address and phone number, appointment date, etc.",
  },
  {
    title: "Cookies",
    body:
      "Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. If you leave a comment on our site, you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.",
  },
  {
    title: "Embedded content from other websites",
    body:
      "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.",
  },
  {
    title: "Analytics",
    body:
      "security and debugging as part of our efforts to keep our site safe and secure. This information is collected anonymously and is not linked to information that identifies you as an individual. We use Google Analytics to track this information. Find out how Google uses your data at https://support.google.com/analytics/answer/6004245.",
  },
  {
    title: "Who we share your data with",
    body:
      "We do not rent, sell or share personal information about you with other people or non-affiliated companies. We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities, unless required by law or other regulations. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.",
  },
  {
    title: "How long we retain your data",
    body:
      "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.",
  },
  {
    title: "What rights you have over your data",
    body:
      "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. You have the right to ensure that your personal data is being processed lawfully (“Subject Access Right”). Your subject access right can be exercised in accordance with data protection laws and regulations. Any subject access request must be made in writing to cloud@techomoda.com. We will provide your personal data to you within the statutory time frames. To enable us to trace any of your personal data that we may be holding, we may need to request further information from you. If you have a complaint about how we have used your information, you have the right to complain to the Information Commissioner’s Office (ICO) by Helpline number: 0303 123 1113.",
  },
  {
    title: "Where we send your data",
    body:
      "Our site may, from time to time, contain links to and from the third party websites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites. Visitor comments may be checked through an automated spam detection service.",
  },
  {
    title: "Changes to our Privacy Policy",
    body:
      "Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.",
  },
  {
    title: "How we protect your data",
    body:
      "Any information you provide to us will either be emailed directly to us or may be stored on a secure server located in France. We use a trusted third-party website and hosting provider to facilitate the running and management of this website. Hosting provider meet high data protection and security standards and are bound by contract to keep any information they process on our behalf confidential. Any data that may be collected through this website that hosting provider process, is kept secure and only processed in the manner we instruct them to. Hosting provider cannot access, provide, rectify or delete any data that they store on our behalf without permission. We do not rent, sell or share personal information about you with other people or non-affiliated companies.",
  },
  {
    title: "Contact information",
    body:
      "Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to cloud@techomoda.com.",
  },
];
