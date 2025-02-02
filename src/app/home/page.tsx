"use client";

import { useState } from 'react';
import * as React from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }  
export default function Home() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    let coursedata = [
        {
            "_class": "course",
            "id": 1754098,
            "title": "The Data Science Course: Complete Data Science Bootcamp 2025",
            "url": "/course/the-data-science-course-complete-data-science-bootcamp/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 8280056,
                    "title": "365 Careers",
                    "name": "365",
                    "display_name": "365 Careers",
                    "job_title": "Creating opportunities for Data Science and Finance students",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/8280056_7887_3.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/8280056_7887_3.jpg",
                    "initials": "3C",
                    "url": "/user/365careers/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/1754098_e0df_3.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg",
            "published_title": "the-data-science-course-complete-data-science-bootcamp",
            "tracking_id": "rZg5LgZORF-Zi9_pGJ5A6w",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning",
            "num_subscribers": 736007,
            "avg_rating": 4.6082935,
            "avg_rating_recent": 4.6044984,
            "rating": 4.6044984,
            "num_reviews": 148804,
            "is_wishlisted": false,
            "num_published_lectures": 523,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/1754098_e0df_3.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/1754098_e0df_3.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/1754098_e0df_3.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "caption_languages": [
                "English [CC]",
                "Arabic [Auto]",
                "Dutch [Auto]",
                "French [Auto]",
                "German [Auto]",
                "Indonesian [Auto]",
                "Italian [Auto]",
                "Japanese [Auto]",
                "Korean [Auto]",
                "Polish [Auto]",
                "Portuguese [Auto]",
                "Simplified Chinese [Auto]",
                "Spanish [Auto]",
                "Thai [Auto]",
                "Turkish [Auto]",
                "Ukrainian [Auto]",
                "Vietnamese [Auto]"
            ],
            "created": "2018-06-18T12:30:08Z",
            "instructional_level": "All Levels",
            "instructional_level_simple": "All Levels",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2018-06-21T21:27:03Z",
            "objectives_summary": [
                "The course provides the entire toolbox you need to become a data scientist",
                "Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow",
                "Impress interviewers by showing an understanding of the data science field"
            ],
            "is_recently_published": false,
            "last_update_date": "2024-12-23",
            "preview_url": "/course/1754098/preview/",
            "learn_url": "/course/the-data-science-course-complete-data-science-bootcamp/learn/",
            "is_in_personal_plan_collection": true,
            "has_508_closed_captions": true,
            "is_coding_exercises_badge_eligible": true,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "32 total hours",
            "content_info_short": "32 hours",
            "bestseller_badge_content": {
                "_class": "ds_course_badge",
                "id": "6252fc7df2a2490c9e001d60d5865214",
                "badge_text": "Bestseller",
                "badge_family": "bestseller",
                "context_info": {
                    "category": {
                        "id": 288,
                        "title": "Development",
                        "url": "/courses/development/",
                        "tracking_object_type": "cat"
                    },
                    "subcategory": null,
                    "label": {
                        "id": 5336,
                        "display_name": "Data Science",
                        "title": "Data Science",
                        "topic_channel_url": "/topic/data-science/",
                        "url": "/topic/data-science/",
                        "tracking_object_type": "cl"
                    }
                }
            },
            "badges": [
                {
                    "_class": "ds_course_badge",
                    "id": "6252fc7df2a2490c9e001d60d5865214",
                    "badge_text": "Bestseller",
                    "badge_family": "bestseller",
                    "context_info": {
                        "category": {
                            "id": 288,
                            "title": "Development",
                            "url": "/courses/development/",
                            "tracking_object_type": "cat"
                        },
                        "subcategory": null,
                        "label": {
                            "id": 5336,
                            "display_name": "Data Science",
                            "title": "Data Science",
                            "topic_channel_url": "/topic/data-science/",
                            "url": "/topic/data-science/",
                            "tracking_object_type": "cl"
                        }
                    }
                }
            ],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 5336,
                    "display_name": "Data Science",
                    "title": "Data Science",
                    "topic_channel_url": "/topic/data-science/",
                    "url": "/topic/data-science/",
                    "tracking_object_type": "cl"
                }
            }
        },
        {
            "_class": "course",
            "id": 903744,
            "title": "Python for Data Science and Machine Learning Bootcamp",
            "url": "/course/python-for-data-science-and-machine-learning-bootcamp/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 9685726,
                    "title": "Jose Portilla",
                    "name": "Jose",
                    "display_name": "Jose Portilla",
                    "job_title": "Head of Data Science at Pierian Training",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/9685726_67e7_4.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
                    "initials": "JP",
                    "url": "/user/joseportilla/"
                },
                {
                    "_class": "user",
                    "id": 265589972,
                    "title": "Pierian Training",
                    "name": "Pierian",
                    "display_name": "Pierian Training",
                    "job_title": "Data Science and Machine Learning Training",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/265589972_dca1.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/265589972_dca1.jpg",
                    "initials": "PT",
                    "url": "/user/pierian-training-2/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/903744_8eb2.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/903744_8eb2.jpg",
            "published_title": "python-for-data-science-and-machine-learning-bootcamp",
            "tracking_id": "Z-h1rWzxTGet83cbJnQDXg",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
            "num_subscribers": 749015,
            "avg_rating": 4.583668,
            "avg_rating_recent": 4.57326,
            "rating": 4.57326,
            "num_reviews": 148445,
            "is_wishlisted": false,
            "num_published_lectures": 165,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/903744_8eb2.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/903744_8eb2.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/903744_8eb2.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "caption_languages": [
                "English",
                "Arabic [Auto]",
                "Dutch [Auto]",
                "French [Auto]",
                "German [Auto]",
                "Indonesian [Auto]",
                "Italian [Auto]",
                "Japanese [Auto]",
                "Korean [Auto]",
                "Polish [Auto]",
                "Portuguese [Auto]",
                "Simplified Chinese [Auto]",
                "Spanish [Auto]",
                "Thai [Auto]",
                "Turkish [Auto]",
                "Vietnamese [Auto]"
            ],
            "created": "2016-07-13T05:22:58Z",
            "instructional_level": "All Levels",
            "instructional_level_simple": "All Levels",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2016-09-18T17:36:23Z",
            "objectives_summary": [
                "Use Python for Data Science and Machine Learning",
                "Use Spark for Big Data Analysis",
                "Implement Machine Learning Algorithms"
            ],
            "is_recently_published": false,
            "last_update_date": "2020-05-03",
            "preview_url": "/course/903744/preview/",
            "learn_url": "/course/python-for-data-science-and-machine-learning-bootcamp/learn/",
            "is_in_personal_plan_collection": true,
            "has_508_closed_captions": false,
            "is_coding_exercises_badge_eligible": false,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "25 total hours",
            "content_info_short": "25 hours",
            "bestseller_badge_content": null,
            "badges": [],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 7380,
                    "display_name": "Python",
                    "title": "Python",
                    "topic_channel_url": "/topic/python/",
                    "url": "/topic/python/",
                    "tracking_object_type": "cl"
                }
            }
        },
        {
            "_class": "course",
            "id": 765242,
            "title": "R Programming A-Z™: R For Data Science With Real Exercises!",
            "url": "/course/r-programming/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 2364054,
                    "title": "Kirill Eremenko",
                    "name": "Kirill",
                    "display_name": "Kirill Eremenko",
                    "job_title": "DS & AI Instructor",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/2364054_83cd_5.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/2364054_83cd_5.jpg",
                    "initials": "KE",
                    "url": "/user/kirilleremenko/"
                },
                {
                    "_class": "user",
                    "id": 27129696,
                    "title": "SuperDataScience Team",
                    "name": "SuperDataScience",
                    "display_name": "SuperDataScience Team",
                    "job_title": "Helping Data Scientists Succeed",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/27129696_acc1_4.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/27129696_acc1_4.jpg",
                    "initials": "ST",
                    "url": "/user/superdatascience-team/"
                },
                {
                    "_class": "user",
                    "id": 150405524,
                    "title": "Ligency Team",
                    "name": "Ligency",
                    "display_name": "Ligency Team",
                    "job_title": "Helping Data Scientists Succeed",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/150405524_94b0_9.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/150405524_94b0_9.jpg",
                    "initials": "LT",
                    "url": "/user/ligency-team/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/765242_2578_6.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/765242_2578_6.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/765242_2578_6.jpg",
            "published_title": "r-programming",
            "tracking_id": "6PUyfk6GRqKNyX_AtAmoBQ",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2",
            "num_subscribers": 276209,
            "avg_rating": 4.645749,
            "avg_rating_recent": 4.636823,
            "rating": 4.636823,
            "num_reviews": 55239,
            "is_wishlisted": false,
            "num_published_lectures": 80,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/765242_2578_6.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/765242_2578_6.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/765242_2578_6.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/765242_2578_6.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "caption_languages": [
                "English",
                "Arabic [Auto]",
                "Dutch [Auto]",
                "French [Auto]",
                "German [Auto]",
                "Indonesian [Auto]",
                "Italian [Auto]",
                "Japanese [Auto]",
                "Korean [Auto]",
                "Polish [Auto]",
                "Portuguese [Auto]",
                "Romanian [Auto]",
                "Simplified Chinese [Auto]",
                "Spanish [Auto]",
                "Thai [Auto]",
                "Turkish [Auto]",
                "Vietnamese [Auto]"
            ],
            "created": "2016-02-17T09:34:04Z",
            "instructional_level": "All Levels",
            "instructional_level_simple": "All Levels",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2016-02-23T18:05:22Z",
            "objectives_summary": [
                "Learn to program in R at a good level",
                "Learn how to use R Studio",
                "Learn the core principles of programming"
            ],
            "is_recently_published": false,
            "last_update_date": "2025-01-13",
            "preview_url": "/course/765242/preview/",
            "learn_url": "/course/r-programming/learn/",
            "is_in_personal_plan_collection": true,
            "has_508_closed_captions": false,
            "is_coding_exercises_badge_eligible": false,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "10.5 total hours",
            "content_info_short": "10.5 hours",
            "bestseller_badge_content": {
                "_class": "ds_course_badge",
                "id": "b00e0c1f08fa4870b8d06311ba76f936",
                "badge_text": "Bestseller",
                "badge_family": "bestseller",
                "context_info": {
                    "category": {
                        "id": 288,
                        "title": "Development",
                        "url": "/courses/development/",
                        "tracking_object_type": "cat"
                    },
                    "subcategory": null,
                    "label": {
                        "id": 7432,
                        "display_name": "R (programming language)",
                        "title": "R (programming language)",
                        "topic_channel_url": "/topic/r-programming-language/",
                        "url": "/topic/r-programming-language/",
                        "tracking_object_type": "cl"
                    }
                }
            },
            "badges": [
                {
                    "_class": "ds_course_badge",
                    "id": "b00e0c1f08fa4870b8d06311ba76f936",
                    "badge_text": "Bestseller",
                    "badge_family": "bestseller",
                    "context_info": {
                        "category": {
                            "id": 288,
                            "title": "Development",
                            "url": "/courses/development/",
                            "tracking_object_type": "cat"
                        },
                        "subcategory": null,
                        "label": {
                            "id": 7432,
                            "display_name": "R (programming language)",
                            "title": "R (programming language)",
                            "topic_channel_url": "/topic/r-programming-language/",
                            "url": "/topic/r-programming-language/",
                            "tracking_object_type": "cl"
                        }
                    }
                }
            ],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 7432,
                    "display_name": "R (programming language)",
                    "title": "R (programming language)",
                    "topic_channel_url": "/topic/r-programming-language/",
                    "url": "/topic/r-programming-language/",
                    "tracking_object_type": "cl"
                }
            }
        },
        {
            "_class": "course",
            "id": 513244,
            "title": "Data Science A-Z: Hands-On Exercises & ChatGPT Prize [2025]",
            "url": "/course/datascience/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 2364054,
                    "title": "Kirill Eremenko",
                    "name": "Kirill",
                    "display_name": "Kirill Eremenko",
                    "job_title": "DS & AI Instructor",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/2364054_83cd_5.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/2364054_83cd_5.jpg",
                    "initials": "KE",
                    "url": "/user/kirilleremenko/"
                },
                {
                    "_class": "user",
                    "id": 27129696,
                    "title": "SuperDataScience Team",
                    "name": "SuperDataScience",
                    "display_name": "SuperDataScience Team",
                    "job_title": "Helping Data Scientists Succeed",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/27129696_acc1_4.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/27129696_acc1_4.jpg",
                    "initials": "ST",
                    "url": "/user/superdatascience-team/"
                },
                {
                    "_class": "user",
                    "id": 150405524,
                    "title": "Ligency Team",
                    "name": "Ligency",
                    "display_name": "Ligency Team",
                    "job_title": "Helping Data Scientists Succeed",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/150405524_94b0_9.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/150405524_94b0_9.jpg",
                    "initials": "LT",
                    "url": "/user/ligency-team/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/513244_b831_4.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/513244_b831_4.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/513244_b831_4.jpg",
            "published_title": "datascience",
            "tracking_id": "C_g88AibSJSUJ9FgOAgrPQ",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!",
            "num_subscribers": 220955,
            "avg_rating": 4.587209,
            "avg_rating_recent": 4.5636864,
            "rating": 4.5636864,
            "num_reviews": 34357,
            "is_wishlisted": false,
            "num_published_lectures": 217,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/513244_b831_4.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/513244_b831_4.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/513244_b831_4.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/513244_b831_4.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "caption_languages": [
                "English [Auto]",
                "Bulgarian [Auto]",
                "Czech [Auto]",
                "Danish [Auto]",
                "Dutch [Auto]",
                "Estonian [Auto]",
                "Finnish [Auto]",
                "French [Auto]",
                "German [Auto]",
                "Greek [Auto]",
                "Hungarian [Auto]",
                "Indonesian [Auto]",
                "Italian [Auto]",
                "Japanese [Auto]",
                "Korean [Auto]",
                "Latvian [Auto]",
                "Lithuanian [Auto]",
                "Polish [Auto]",
                "Portuguese [Auto]",
                "Romanian [Auto]",
                "Simplified Chinese [Auto]",
                "Slovak [Auto]",
                "Spanish [Auto]",
                "Swedish [Auto]",
                "Thai [Auto]",
                "Ukrainian [Auto]"
            ],
            "created": "2015-05-28T00:45:37Z",
            "instructional_level": "All Levels",
            "instructional_level_simple": "All Levels",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2015-08-18T20:20:15Z",
            "objectives_summary": [
                "Successfully perform all steps in a complex Data Science project",
                "Create Basic Tableau Visualisations",
                "Perform Data Mining in Tableau"
            ],
            "is_recently_published": false,
            "last_update_date": "2025-01-12",
            "preview_url": "/course/513244/preview/",
            "learn_url": "/course/datascience/learn/",
            "is_in_personal_plan_collection": true,
            "has_508_closed_captions": false,
            "is_coding_exercises_badge_eligible": false,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "21.5 total hours",
            "content_info_short": "21.5 hours",
            "bestseller_badge_content": null,
            "badges": [],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 5336,
                    "display_name": "Data Science",
                    "title": "Data Science",
                    "topic_channel_url": "/topic/data-science/",
                    "url": "/topic/data-science/",
                    "tracking_object_type": "cl"
                }
            }
        },
        {
            "_class": "course",
            "id": 4324528,
            "title": "Data Manipulation in Python: Master Python, Numpy & Pandas",
            "url": "/course/master-data-science-in-python/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 9140618,
                    "title": "Meta Brains",
                    "name": "Meta",
                    "display_name": "Meta Brains",
                    "job_title": "Let's code & build the metaverse together!",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/9140618_12f0_2.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/9140618_12f0_2.jpg",
                    "initials": "MB",
                    "url": "/user/metabrains/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/4324528_4ee9_2.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/4324528_4ee9_2.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/4324528_4ee9_2.jpg",
            "published_title": "master-data-science-in-python",
            "tracking_id": "enfzOEYvRlujk_9pUFgsaA",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Learn Python, NumPy & Pandas for Data Science: Master essential data manipulation for data science in python",
            "num_subscribers": 177545,
            "caption_locales": [
                {
                    "_class": "locale",
                    "locale": "en_US",
                    "title": "English (US)",
                    "english_title": "English (US)"
                }
            ],
            "avg_rating": 4.3474574,
            "avg_rating_recent": 4.3368793,
            "rating": 4.3368793,
            "num_reviews": 2462,
            "is_wishlisted": false,
            "num_published_lectures": 108,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/4324528_4ee9_2.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/4324528_4ee9_2.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/4324528_4ee9_2.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/4324528_4ee9_2.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "caption_languages": [
                "English [Auto]"
            ],
            "created": "2021-09-28T20:34:32Z",
            "instructional_level": "Beginner Level",
            "instructional_level_simple": "Beginner",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2021-11-26T19:44:00Z",
            "objectives_summary": [
                "Learn to use Pandas for Data Analysis",
                "Learn to work with numerical data in Python",
                "Learn statistics and math with Python"
            ],
            "is_recently_published": false,
            "last_update_date": "2024-01-16",
            "preview_url": "/course/4324528/preview/",
            "learn_url": "/course/master-data-science-in-python/learn/",
            "is_in_personal_plan_collection": false,
            "has_508_closed_captions": false,
            "is_coding_exercises_badge_eligible": false,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "4 total hours",
            "content_info_short": "4 hours",
            "bestseller_badge_content": null,
            "badges": [],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 5336,
                    "display_name": "Data Science",
                    "title": "Data Science",
                    "topic_channel_url": "/topic/data-science/",
                    "url": "/topic/data-science/",
                    "tracking_object_type": "cl"
                }
            }
        },
        {
            "_class": "course",
            "id": 671576,
            "title": "Machine Learning, Data Science and Generative AI with Python",
            "url": "/course/data-science-and-machine-learning-with-python-hands-on/",
            "is_paid": true,
            "visible_instructors": [
                {
                    "_class": "user",
                    "id": 13148312,
                    "title": "Sundog Education by Frank Kane",
                    "name": "Sundog Education",
                    "display_name": "Sundog Education by Frank Kane",
                    "job_title": "Join over 900K students learning ML, AI, AWS, and Data Eng.",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/13148312_b29e_3.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/13148312_b29e_3.jpg",
                    "initials": "SB",
                    "url": "/user/frankkane/"
                },
                {
                    "_class": "user",
                    "id": 32164746,
                    "title": "Frank Kane",
                    "name": "Frank",
                    "display_name": "Frank Kane",
                    "job_title": "Ex-Amazon Sr. Engineer and Sr. Manager, CEO Sundog Education",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/32164746_8429_3.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/32164746_8429_3.jpg",
                    "initials": "FK",
                    "url": "/user/frank-kane-2/"
                },
                {
                    "_class": "user",
                    "id": 168079506,
                    "title": "Sundog Education Team",
                    "name": "Sundog Education",
                    "display_name": "Sundog Education Team",
                    "job_title": "Sundog Education Team",
                    "image_50x50": "https://img-c.udemycdn.com/user/50x50/168079506_7ef6.jpg",
                    "image_100x100": "https://img-c.udemycdn.com/user/100x100/168079506_7ef6.jpg",
                    "initials": "ST",
                    "url": "/user/gabrielle-crumley-2/"
                }
            ],
            "image_125_H": "https://img-c.udemycdn.com/course/125_H/671576_a272_4.jpg",
            "image_240x135": "https://img-c.udemycdn.com/course/240x135/671576_a272_4.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-c.udemycdn.com/course/480x270/671576_a272_4.jpg",
            "published_title": "data-science-and-machine-learning-with-python-hands-on",
            "tracking_id": "TlpETbMtSNStpZ5CEFaGKA",
            "locale": {
                "_class": "locale",
                "locale": "en_US",
                "title": "English (US)",
                "english_title": "English (US)",
                "simple_english_title": "English"
            },
            "headline": "Complete hands-on machine learning and GenAI tutorial with data science, Tensorflow, GPT, OpenAI, and neural networks",
            "num_subscribers": 223008,
            "avg_rating": 4.6015625,
            "avg_rating_recent": 4.574177,
            "rating": 4.574177,
            "num_reviews": 33953,
            "is_wishlisted": false,
            "num_published_lectures": 147,
            "num_published_practice_tests": 0,
            "image_50x50": "https://img-c.udemycdn.com/course/50x50/671576_a272_4.jpg",
            "image_100x100": "https://img-c.udemycdn.com/course/100x100/671576_a272_4.jpg",
            "image_304x171": "https://img-c.udemycdn.com/course/304x171/671576_a272_4.jpg",
            "image_750x422": "https://img-c.udemycdn.com/course/750x422/671576_a272_4.jpg",
            "is_in_user_subscription": false,
            "has_closed_caption": true,
            "created": "2015-11-16T20:09:45Z",
            "instructional_level": "Beginner Level",
            "instructional_level_simple": "Beginner",
            "content_length_practice_test_questions": 0,
            "is_user_subscribed": false,
            "buyable_object_type": "course",
            "published_time": "2016-02-02T00:11:44Z",
            "objectives_summary": [
                "Build generative AI systems with OpenAI, RAG, and LLM Agents",
                "Build artificial neural networks with Tensorflow and Keras",
                "Implement machine learning at massive scale with Apache Spark's MLLib"
            ],
            "is_recently_published": false,
            "last_update_date": "2025-01-15",
            "preview_url": "/course/671576/preview/",
            "learn_url": "/course/data-science-and-machine-learning-with-python-hands-on/learn/",
            "is_in_personal_plan_collection": true,
            "has_508_closed_captions": true,
            "is_coding_exercises_badge_eligible": false,
            "predictive_score": null,
            "relevancy_score": null,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "instructor_name": null,
            "content_info": "20.5 total hours",
            "content_info_short": "20.5 hours",
            "bestseller_badge_content": null,
            "badges": [],
            "free_course_subscribe_url": null,
            "context_info": {
                "category": {
                    "id": 288,
                    "title": "Development",
                    "url": "/courses/development/",
                    "tracking_object_type": "cat"
                },
                "subcategory": null,
                "label": {
                    "id": 5336,
                    "display_name": "Data Science",
                    "title": "Data Science",
                    "topic_channel_url": "/topic/data-science/",
                    "url": "/topic/data-science/",
                    "tracking_object_type": "cl"
                }
            }
        }
    ];


    let age = 5;
    const [ageData, setAgeData] = useState(0);
    function handleClick() {
        alert("hello");
        setAgeData(ageData + 1);
    }
    // Props : Harcoded/readonly/static(we can't change anything)
    // State : Dynamincaly/read and write changing(we can change anything)/ Update
    return (
        <>
            {/* {age}<br/>
           {ageData}<br/>
            Home Component<br/> */}
            <Carousel>
                <div>
                    <Image src="/assets/slider1.jpg" alt="business" width={900} height={400} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <Image src="/assets/slider2.jpg" alt="business" width={900} height={400} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <Image src="/assets/slider1.jpg" alt="business" width={900} height={400} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

             <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-sct">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Web Development" {...a11yProps(0)} className="tabs-label" />
          <Tab label="C++" {...a11yProps(1)} className="tabs-label" />
          <Tab label="Item Three" {...a11yProps(2)} className="tabs-label" />
          <Tab label="Item Four" {...a11yProps(3)} className="tabs-label" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Web Development Conent
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        C++ Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>

            {
                coursedata.map((data, i) => {
                   return   <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                            sx={{ height: 140 }}
                            image={data.image_240x135}
                            title="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                <p key={i}>{data.title}</p>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {
                                        data.visible_instructors.map((innetrItem, i) => {
                                            return <span key={i}>{innetrItem.title}, </span>
                                        })
                                    }
                                   
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                   
                //    <p key={i}>{data.title}</p>
                })
            }

           

            {/* <button type="button" onClick={handleClick}>Submit</button> <br /> */}
            {/* <Image src="/b74fea46-e804-45b8-bd03-5dc77be85373.jfif" alt='img' className="slider-img" width="1500" height="200" /> */}
        </>
    )
}

// const Home = () =>{
//         function handleClick(){
//             alert("hello");
//         }
//     return(
//         <>
//            <Header />
//             Home Component<br />
//             <button type="button" onClick={handleClick}>Submit</button>
//         </>
//     )
// }

// export default Home;