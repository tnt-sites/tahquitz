---
_schema: default
title: "Virtual Consultations"
description: "Get free virtual dental consultations from Tahquitz Dental Group in three easy steps."
pageSections:
  - _component: page-sections/heroes/interior-banner
    eyebrow: "Virtual Dental Consultation in Palm Springs"
    heading: "Get the Answers You Need Virtually"
    text: |-
      If you’re interested in improving your smile or you have chronic dental concerns that you want to address, take advantage of our free virtual consultations! In just three easy steps, you can have a better understanding of your dental goals and what steps are needed for you to achieve them.
    imageSource: "/src/assets/images/pages/virtual-consult.webp"
    imageAlt: "Smiling woman taking a selfie"
    buttonSections: []
  - _component: page-sections/info-blocks/consult-steps
    id: ""
    heading: "How a Virtual Consult Works"
    steps:
      - heading: "Upload"
        text: "Upload a selfie image of your smile and explain any specific concerns or objectives you may have."
      - heading: "View Video"
        text: "A personalized video will be created by our dental professionals to address your specific dental inquiries and concerns. Our recommendations will be tailored to your unique needs."
      - heading: "Scheduling Your In-Office Visit"
        text: "Following the viewing of your personalized video, you may book an appointment to meet with our dentists in person."
  - _component: page-sections/forms/appointment-form
    id: virtual-consult-form
    heading: "Start Your Virtual Consult"
    subtext: ""
    formAction: "https://tnt-adder.herokuapp.com/submit/78dc1827-7994-485c-9255-a0510dcc8663"
    formBlocks:
      - _component: building-blocks/forms/input
        label: "Name"
        name: "name"
        type: "text"
        placeholder: "Name"
        required: true
      - _component: building-blocks/forms/input
        label: "Email"
        name: "email"
        type: "email"
        placeholder: "Email"
        required: true
      - _component: building-blocks/forms/input
        label: "Phone"
        name: "phone"
        type: "tel"
        placeholder: "Phone"
        required: true
      - _component: building-blocks/forms/input
        label: "Zip Code"
        name: "zip"
        type: "text"
        placeholder: "Zip Code"
        required: true
      - _component: building-blocks/forms/input
        label: "Guardian Name (if under 18 years old)"
        name: "guardian"
        type: "text"
        placeholder: "Guardian Name"
        required: false
      - _component: building-blocks/forms/textarea
        label: "Your Concerns"
        name: "comments"
        placeholder: "Tell us your concerns, what you are hoping to achieve, and what you'd like us to address."
        required: false
      - _component: building-blocks/forms/file-upload
        label: "Upload a Close-Up of Your Smile"
        name: "closeup"
        accept: "image/*"
        required: true
      - _component: building-blocks/forms/file-upload
        label: "Upload a Selfie"
        name: "selfie"
        accept: "image/*"
        required: true
      - _component: building-blocks/forms/submit
        text: "Send"
        borderRadius: "none"
        uppercase: true
  - _component: page-sections/ctas/more-to-explore
    heading: More to Explore
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: "Request an Appointment"
        link: "/contact-us/request-an-appointment/"
        variant: primary
        size: md
        borderRadius: none
        uppercase: true
      - _component: building-blocks/core-elements/button
        text: "Our Services"
        link: "/services/"
        variant: primary
        size: md
        borderRadius: none
        uppercase: true
      - _component: building-blocks/core-elements/button
        text: "Smile Gallery"
        link: "/smile-gallery/"
        variant: primary
        size: md
        borderRadius: none
        uppercase: true
---
