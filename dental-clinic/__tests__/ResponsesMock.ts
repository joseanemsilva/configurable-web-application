const mockedResponses: Record<string, any> = {
    "/hero-section": {
        "data": {
            "heading": "Welcome to our Dental Clinic",
            "subheading": "Compassionate dental care for the whole family in a modern, comfortable environment. Now welcoming new patients in the heart of the community.",
            "ctaPrimary": "Schedule Your Visit",
            "heroImage": {
                "name": "hero-bg.jpg",
                "alternativeText": "main page image showing a dentist performing an examination",
                "url": "/uploads/hero_bg_f51a0a274b.jpg",
            }
        }
    },

    "/mission-section": {
        "data": {
            "sectionTitle": {
                "title": "Our Mission",
                "description": "We believe clear communication is the foundation of great healthcare. Our dedicated team is proud to offer services in both English and Portuguese, ensuring you feel heard, understood, and comfortable throughout your entire treatment. Schedule your visit today!"
            },
            "contents": [
                {
                    "id": 36,
                    "title": "Open 7 days a week",
                    "description": "We offer weekend appointments."
                },
                {
                    "id": 37,
                    "title": "Emergencies Welcome",
                    "description": "We prioritize emergency visits"
                },
                {
                    "id": 38,
                    "title": "Direct Insurance Billing",
                    "description": "We bill insurance directly."
                }
            ]
        }
    },
    "/service-section": {
        "data": {
            "sectionTitle": {
                "id": 34,
                "title": "Expert Dentistry to All Generation",
                "description": "From a toddler’s very first check-up to specialized restorative care for seniors, we are proud to be a home for every smile. We understand that dental needs change as you grow, which is why our team is trained in all-age smile care. We provide a gentle, stress-free environment designed to make children feel brave and adults feel relaxed."
            },
            "serviceImage": {
                "name": "d-dental-office-BiknMFl7iOw-unsplash.jpg",
                "alternativeText": null,
                "url": "/uploads/large_d_dental_office_Bikn_M_Fl7i_Ow_unsplash_b0e10c797e.jpg"
            }
        }

    },

    "/payment-plan-section": {
        "data": {
            "sectionTitle": {
                "title": "Affordable Smile to Everyone",
                "description": "We offer a variety of payment options designed to fit your unique household budget."
            },
            "contents": [
                {
                    "id": 18,
                    "description": "We offer direct billing to major insurance providers. Contact us for more details.",
                    "ctaPrimary": "Know More",
                    "link": "/insurance-billing",
                    "title": "Direct Insurance Billing"
                },
                {
                    "id": 19,
                    "description": "We are registered to provide affordable support care for eligible residents.",
                    "ctaPrimary": "Know More",
                    "link": "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
                    "title": "CDCP - Canadian Dental Care Plan"
                },
                {
                    "id": 20,
                    "description": "We provide essential dental coverage for protected persons and refugees.",
                    "ctaPrimary": "Know More",
                    "link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html",
                    "title": "IFHP - Interim Federal Health Program"
                }
            ]
        }
    },

    "/testimonial-section": {
        "data": {
            "sectionTitle": {
                "id": 85,
                "title": "What Our Clients Says",
                "description": null
            },
            "testimonials": [
                {
                    "id": 28,
                    "authorName": "Maria S",
                    "quote": "he best dental experience I've ever had. Being able to explain my symptoms in Portuguese made me feel like home and embraced. Highly recommend!",
                    "rating": 5,
                    "image": {
                        "id": 6,
                        "name": "michael-dam-mEZ3PoFGs_k-unsplash.jpg",
                        "alternativeText": "Team Image",
                        "url": "/uploads/michael_dam_m_EZ_3_Po_F_Gs_k_unsplash_07745ae94f.jpg",
                    }
                },
                {
                    "id": 29,
                    "authorName": "James R",
                    "quote": "Finally, a dentist open on Sundays! The direct billing was seamless, and the staff was incredibly professional. I fell that I was in good hands the entire time.",
                    "rating": 5,
                    "image": {
                        "id": 8,
                        "name": "fakhri-labib-ZhBGD4vykCU-unsplash.jpg",
                        "alternativeText": "Team Image",
                        "url": "/uploads/fakhri_labib_Zh_BGD_4vyk_CU_unsplash_bf212079bf.jpg",
                    }
                },
                {
                    "id": 30,
                    "authorName": "Franttini M",
                    "quote": "I was really impressed with the level of care and attention I received. The fact that they offer direct billing made the whole process so much easier.",
                    "rating": 5,
                    "image": {
                        "id": 7,
                        "name": "mohamed-jamil-latrach-yizqCTUxqts-unsplash (1).jpg",
                        "alternativeText": "Team Image",
                        "url": "/uploads/mohamed_jamil_latrach_yizq_CT_Uxqts_unsplash_1_b85ebe7f71.jpg",
                    }
                }
            ],
        }
    },

    "/contact": {
        "data": {
            "sectionTitle": {
                "id": 88,
                "title": "Contact Us",
                "description": "We are here to help you with any questions. Please feel free to reach out to us through any of the contact methods below, and we will get back to you as soon as possible."
            },
            "contactInfo": [
                {
                    "id": 51,
                    "title": "Phone Number",
                    "description": "+1 (234) 567-8901"
                },
                {
                    "id": 52,
                    "title": "Email Address",
                    "description": "gmail.com"
                },
                {
                    "id": 53,
                    "title": "Our Location",
                    "description": "51 Dockside Dr, Toronto, ON M5A 0B6"
                },
                {
                    "id": 54,
                    "title": "Opening Hours",
                    "description": "Mon-Fri: 9:00 AM - 8:00 PM\nSat-Sun: 10:00 AM - 6:00 PM"
                }
            ],
            "contactForm": {
                "id": 8,
                "title": "Send us a Message",
                "submit": "Send",
                "fullName": {
                    "id": 25,
                    "label": "Full Name",
                    "placeholder": "Adam Gelius"
                },
                "email": {
                    "id": 26,
                    "label": "Email",
                    "placeholder": "example@email.com"
                },
                "phoneNumber": {
                    "id": 27,
                    "label": "Phone Number",
                    "placeholder": "(890) 456 7899"
                },
                "message": {
                    "id": 28,
                    "label": "Message",
                    "placeholder": "Type your message here"
                }
            },
            "maps": {
                "id": 4,
                "location": "George Brown College - Waterfront Campus 51 Dockside Dr, Toronto, ON M5A 0B6",
                "sectionTitle": {
                    "id": 89,
                    "title": "Find Us on Google Maps",
                    "description": "We are conveniently located in the heart of Toronto, making it easy for you to access our dental services. Our clinic is situated at 51 Dockside Dr, Toronto, ON M5A 0B6, just a short distance from major public transportation routes and parking facilities."
                }
            }
        }
    }
}

export default mockedResponses;
