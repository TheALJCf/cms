import gcashImg from "../images/gcash-qr.png";

export const GivingTextContents = {
  title: 'WE <span style="color: green;">THANK YOU</span>!',
  videoBG:
    "https://videos.pexels.com/video-files/3838401/3838401-uhd_2732_1440_25fps.mp4",
  description1:
    'WITH A <span style="color: green;">GRATEFUL</span> HEART, WE <span style="color: green;">HONOR</span> THE LORD',
  description2: "THROUGH GIVING AND GENEROSITY",
  verseDescription:
    '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."',
  verse: "2 CORINTHIANS 9:7",
  description3: "YOUR FAITHFUL GIVING MAKES A DIFFERENCE.",
  description4: "You can give thru our Gcash QR Code",
  gcash: {
    image: gcashImg,
    title: "THE ALJCF",
    name: "(ABIGAIL EUNICE N.)",
    number: "09564174330",
    remarks:
      'Take a screenshot of transaction then send to <a href="https://www.facebook.com/joannamarie.narvadez" style="color:blue;">Joan Narvadez</a> or <a href="https://www.facebook.com/sandra.samson.3939" style="color:blue;">Sandra Macabangun</a>',
  },
  request: {
    remarks:
      "You may give your information and prayer request, so we will know who's giving via QR",
    components: [
      { title: "Name", type: "textEdit", placeHolder: "Enter your name" },
      {
        title: "Contact Number",
        type: "textEdit",
        placeHolder: "Enter your contact number",
      },
      {
        title: "Email",
        type: "textEdit",
        placeHolder: "Enter your email address",
      },
      {
        title: "Giving/Donate Amount",
        type: "textEdit",
        placeHolder: "Enter Amount",
      },
      {
        title: "Prayer Request",
        type: "textArea",
        placeHolder: "Enter your message or prayer request",
      },
    ],
  },
};
