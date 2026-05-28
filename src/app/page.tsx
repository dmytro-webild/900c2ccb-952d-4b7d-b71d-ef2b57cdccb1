"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, BookOpen, Calendar, Info, Sparkles, Star, Users, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Our Story",          id: "#about"},
        {
          name: "Specials",          id: "#specials"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Olive & Thyme"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient"}}
      logoText="Olive & Thyme"
      description="Experience culinary excellence with fresh, seasonal ingredients in a warm, inviting atmosphere."
      buttons={[
        {
          text: "Reserve a Table",          href: "#contact"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/male-chef-kitchen-cooking_23-2148934670.jpg"
      imageAlt="Elegant dining room at Olive & Thyme"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="Passion for Flavor, Rooted in Tradition"
    />
  </div>

  <div id="specials" data-section="specials">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Seasonal Tasting Menus",          description: "Indulge in our exquisite tasting menus, meticulously crafted each season to showcase the freshest ingredients.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-woman-cuts-red-bell-pepper-cutting-board-with-parsley-tomatoes-basket-eggplants-wooden-background_141793-52119.jpg",            imageAlt: "Chef preparing a delicate dish"},
          items: [
            {
              icon: Sparkles,
              text: "Fresh Ingredients"},
            {
              icon: Calendar,
              text: "Seasonal Selection"},
            {
              icon: Award,
              text: "Culinary Excellence"},
          ],
          reverse: false
        },
        {
          title: "Expert Wine Pairings",          description: "Elevate your meal with our sommelier's expertly selected wine pairings, designed to complement each dish perfectly.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-table-with-wine-glass_23-2147784077.jpg",            imageAlt: "Sommelier pouring wine"},
          items: [
            {
              icon: Wine,
              text: "Curated List"},
            {
              icon: Star,
              text: "Perfect Match"},
            {
              icon: Info,
              text: "Guided Experience"},
          ],
          reverse: true
        },
        {
          title: "Private Dining & Events",          description: "Host your special occasions in our elegant private dining rooms, offering bespoke menus and personalized service.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/plate-noodles-chili-peppers-tomatoes-marble-background_114579-55719.jpg?_wi=1",            imageAlt: "Elegant private dining room"},
          items: [
            {
              icon: Users,
              text: "Exclusive Space"},
            {
              icon: BookOpen,
              text: "Custom Menus"},
            {
              icon: Star,
              text: "Dedicated Service"},
          ],
          reverse: false
        }
      ]}
      title="Signature Experiences at Olive & Thyme"
      description="Discover what makes dining with us truly special, from seasonal dishes to unforgettable events and expertly curated beverage pairings."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Truffle Mushroom Risotto",          price: "$32.00",          imageSrc: "http://img.b2bpic.net/free-photo/plate-noodles-chili-peppers-tomatoes-marble-background_114579-55719.jpg?_wi=2",          imageAlt: "Creamy truffle mushroom risotto"},
        {
          id: "2",          name: "Pan-Seared Duck Breast",          price: "$45.00",          imageSrc: "http://img.b2bpic.net/free-photo/beef-steak-served-with-yellow-mashed-puree-vegetables_140725-1492.jpg",          imageAlt: "Pan-seared duck breast with cherry sauce"},
        {
          id: "3",          name: "Grilled Chilean Sea Bass",          price: "$48.00",          imageSrc: "http://img.b2bpic.net/free-photo/dietary-salad-mix-sliced-turnips-served-wooden-platter-dark-colored-background-high-quality-photo_114579-64724.jpg",          imageAlt: "Grilled Chilean sea bass with asparagus"},
        {
          id: "4",          name: "Artisan Cheese Board",          price: "$28.00",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-decorating-pan-de-muerto-with-sugar_23-2149023952.jpg",          imageAlt: "Artisan cheese board with fruits and nuts"},
        {
          id: "5",          name: "Dark Chocolate Lava Cake",          price: "$15.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-cookies-with-cup-coffee-biscuits-light-surface-dessert-sweet-cake-tea-horizontal-dough-sugar-biscuits_140725-158726.jpg",          imageAlt: "Decadent dark chocolate lava cake"},
        {
          id: "6",          name: "Seasonal Berry Tart",          price: "$14.00",          imageSrc: "http://img.b2bpic.net/free-photo/orange-juice-cocktail-table_140725-6757.jpg",          imageAlt: "Fresh seasonal berry tart"},
      ]}
      title="Our Seasonal Menu"
      description="Crafted with the freshest ingredients and culinary passion, our menu offers a delightful journey for your palate, from appetizers to exquisite desserts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "@sarah_foodie",          testimonial: "Olive & Thyme is an absolute gem! The truffle risotto was divine, and the service was impeccable. A truly unforgettable dining experience.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-gorgeous-young-female-feels-happy-coffee-shop_273609-2792.jpg",          imageAlt: "Sarah J."},
        {
          id: "2",          name: "Mark T.",          handle: "@mark_eats",          testimonial: "Every visit to Olive & Thyme feels like a special occasion. The pan-seared duck is a masterpiece, and their wine pairings are always spot on.",          imageSrc: "http://img.b2bpic.net/free-photo/photo-handsome-man-hug-his-woman-while-drinking-wine_171337-18729.jpg",          imageAlt: "Mark T."},
        {
          id: "3",          name: "Emily R.",          handle: "@emily_reviews",          testimonial: "The atmosphere at Olive & Thyme is so inviting, and the food is consistently outstanding. Their seasonal berry tart is a must-try!",          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-enyoing-dinner-party_52683-130089.jpg",          imageAlt: "Emily R."},
        {
          id: "4",          name: "David K.",          handle: "@david_dines",          testimonial: "From the appetizers to dessert, Olive & Thyme delivers perfection. The grilled sea bass was incredibly fresh and perfectly cooked.",          imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-food-restaurant_23-2149269179.jpg",          imageAlt: "David K."},
        {
          id: "5",          name: "Jessica L.",          handle: "@jessica_food",          testimonial: "Our private dining event here was flawless. The customized menu was fantastic, and the attention to detail made it truly special.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-eating-salmon-bowl_23-2150427650.jpg",          imageAlt: "Jessica L."},
      ]}
      title="What Our Guests Say"
      description="Hear from our cherished customers about their memorable dining experiences and the flavors that keep them coming back to Olive & Thyme."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Do you accept reservations?",          content: "Yes, we highly recommend making a reservation, especially for dinner and weekend brunch. You can book a table directly through our website or by calling us."},
        {
          id: "2",          title: "Do you accommodate dietary restrictions?",          content: "Absolutely. Please inform us of any dietary restrictions or allergies when making your reservation or upon arrival, and our chefs will do their best to accommodate."},
        {
          id: "3",          title: "Can I host a private event at Olive & Thyme?",          content: "Yes, we offer private dining rooms perfect for intimate gatherings, corporate events, or celebrations. Please contact us to discuss your specific needs and our event packages."},
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to common questions about reservations, dietary needs, private events, and more to ensure your visit is seamless."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Plan Your Visit to Olive & Thyme"
      description="We look forward to welcoming you. Reach out for reservations, private event inquiries, or any other questions. Our team is here to assist."
      imageSrc="http://img.b2bpic.net/free-photo/illuminated-fairy-lights-against-blurred-backdrop_23-2148056725.jpg"
      imageAlt="Exterior view of Olive & Thyme Restaurant"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Your Email"
      buttonText="Send Message"
      termsText="By sending a message you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qj7mng"
      logoAlt="Olive & Thyme logo"
      logoText="Olive & Thyme"
      columns={[
        {
          title: "About",          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Team",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Menu",          items: [
            {
              label: "Main Courses",              href: "#menu"},
            {
              label: "Desserts",              href: "#menu"},
            {
              label: "Wine List",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Reservations",              href: "#contact"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Olive & Thyme. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
