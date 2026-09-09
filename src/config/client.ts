import type { ClientConfig } from '../types';

// Change this file for each client. Section order is page order.
export const client = {
  "demo": {
    "enabled": true,
    "label": "BASIC 01 / EDITORIAL CALM",
    "note": "Created by Alvin · Fictional business"
  },
  "business": {
    "name": "bright room",
    "monogram": "✦",
    "location": "Calgary, Alberta"
  },
  "seo": {
    "title": "bright room — Editorial calm demo",
    "description": "Thoughtful home cleaning, built around real life.",
    "language": "en-CA",
    "indexable": false
  },
  "ui": {
    "skipToContent": "Skip to content",
    "menuOpen": "Menu",
    "menuClose": "Close",
    "navigationLabel": "Main navigation",
    "backToTop": "Back to top"
  },
  "footer": {
    "note": "Thoughtful home cleaning, built around real life.",
    "copyright": "bright room is a fictional business. Photography is for demonstration only.",
    "links": []
  },
  "headerAction": {
    "label": "Book a clean",
    "href": "#contact"
  },
  "hero": {
    "eyebrow": "THOUGHTFUL HOME CLEANING",
    "title": [
      "A calmer home,"
    ],
    "emphasis": "backed by care.",
    "description": "Reliable recurring cleans designed around your home, schedule, and priorities.",
    "primaryAction": {
      "label": "Explore services",
      "href": "#services"
    },
    "secondaryAction": {
      "label": "Meet Bright Room",
      "href": "#about"
    },
    "image": {
      "src": "images/bright-room-gallery-2.webp",
      "alt": "Bright living room with white seating, tall windows and a stone fireplace.",
      "width": 1800,
      "height": 1200,
      "position": "50% 50%"
    },
    "imageCaption": "A little more room to breathe.",
    "note": "Weekly, biweekly, or a fresh start.",
    "locationLabel": "CALGARY & AREA",
    "highlights": [
      {
        "title": "Your routine",
        "description": "Weekly or biweekly care."
      },
      {
        "title": "Your priorities",
        "description": "A clean shaped around you."
      },
      {
        "title": "Your time back",
        "description": "One less thing on the list."
      }
    ]
  },
  "sections": [
    {
      "type": "services",
      "id": "services",
      "title": "The right clean for your home.",
      "eyebrow": "ROOM FOR REAL LIFE",
      "navLabel": "Services",
      "items": [
        {
          "id": "recurring",
          "title": "Recurring cleans",
          "subtitle": "Weekly or biweekly",
          "description": "Regular care for the rooms you use every day. We agree on a routine and keep things feeling fresh.",
          "features": [
            "Kitchen and bathroom surfaces",
            "Floors, dusting, and everyday details",
            "A checklist shaped around your home"
          ]
        },
        {
          "id": "deep",
          "title": "Deep cleans",
          "subtitle": "A complete reset",
          "description": "A little more time for the corners, edges, and details that need extra attention.",
          "features": [
            "Everything in a regular clean",
            "Extra attention to built-up areas",
            "Priorities agreed before your visit"
          ]
        },
        {
          "id": "move",
          "title": "Move-in ready",
          "subtitle": "Start fresh",
          "description": "A clean, welcoming space for your next chapter, whether you’re settling in or handing over the keys.",
          "features": [
            "Empty-home cleaning",
            "Cupboards and drawers by request",
            "A clear quote before we begin"
          ]
        }
      ]
    },
    {
      "type": "showcase",
      "id": "photos",
      "title": "Every room, a fresh beginning.",
      "eyebrow": "SPACES TO COME HOME TO",
      "navLabel": "Photos",
      "description": "Sample photography shown for this demo.",
      "layout": "filmstrip",
      "aspect": "landscape",
      "labels": {
        "previous": "Previous photos",
        "next": "Next photos",
        "show": "Show",
        "instructions": "Swipe, scroll, or use the arrows to explore.",
        "carousel": "carousel"
      },
      "items": [
        {
          "id": "1",
          "image": {
            "src": "images/bright-room.webp",
            "alt": "Contemporary living room with a grey sofa and a glass coffee table.",
            "width": 1800,
            "height": 1200,
            "position": "50% 50%"
          },
          "title": "Everyday spaces",
          "category": "Recurring care",
          "description": "A comfortable place to unwind at the end of the day."
        },
        {
          "id": "2",
          "image": {
            "src": "images/bright-room-gallery-1.webp",
            "alt": "Open living room with white seating, pale floors and green chairs.",
            "width": 1800,
            "height": 1200,
            "position": "50% 50%"
          },
          "title": "Room to reset",
          "category": "Deep cleaning",
          "description": "A little extra attention when your space needs it."
        },
        {
          "id": "3",
          "image": {
            "src": "images/bright-room-gallery-2.webp",
            "alt": "Airy living room with a stone fireplace and white seating.",
            "width": 1800,
            "height": 1200,
            "position": "50% 50%"
          },
          "title": "New beginnings",
          "category": "Move-in cleaning",
          "description": "Start your next chapter with a fresh space."
        }
      ]
    },
    {
      "type": "about",
      "id": "about",
      "title": "Thoughtful care. Familiar faces.",
      "eyebrow": "HELLO, WE’RE BRIGHT ROOM",
      "navLabel": "About",
      "body": [
        "Home is where life happens. We make the cleaning part easier, with clear communication and time for the details that matter to you.",
        "Before our first visit, we talk through your space, your priorities, and the best routine for your home. No guessing what’s included."
      ],
      "details": [
        {
          "label": "Made for",
          "value": "Homes, condos, and busy routines"
        },
        {
          "label": "Our approach",
          "value": "Listen first. Clean with care."
        }
      ]
    },
    {
      "type": "faq",
      "id": "questions",
      "title": "Before your first clean.",
      "eyebrow": "GOOD TO KNOW",
      "items": [
        {
          "question": "How is a clean priced?",
          "answer": "We discuss the size of your home, its condition, and the rooms you want included, then provide a quote before your visit."
        },
        {
          "question": "Can I ask for specific areas?",
          "answer": "Yes. Tell us which rooms or tasks matter most when you enquire, and we’ll agree on a clear checklist."
        },
        {
          "question": "Do I need to be home?",
          "answer": "We’ll arrange access with you before the visit. Let us know your preferences so we can find a routine that works."
        }
      ]
    },
    {
      "type": "contact",
      "id": "contact",
      "title": "Come home to a little less on your list.",
      "eyebrow": "LET’S TALK",
      "navLabel": "Contact",
      "description": "Tell us about your home and the kind of clean you have in mind.",
      "method": {
        "mode": "demo",
        "submitLabel": "Preview enquiry",
        "help": "Demo form — nothing is sent or stored.",
        "success": "That’s how an enquiry would begin. This is a demo, so your message has not been sent."
      },
      "details": [
        {
          "label": "Service area",
          "value": "Calgary and nearby communities"
        },
        {
          "label": "Hours",
          "value": "Monday–Friday · 8 am–5 pm"
        }
      ],
      "fields": {
        "name": "Your name",
        "email": "Email address",
        "service": "What can we help with?",
        "message": "Tell us a little more",
        "servicePlaceholder": "Choose a service",
        "services": [
          "Recurring clean",
          "Deep clean",
          "Move-in / move-out clean"
        ]
      }
    }
  ]
} satisfies ClientConfig;
