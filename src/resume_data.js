import janeDoeHeadshot from './assets/jane-doe.jpeg';
import jimBobHeadshot from './assets/jim-bob.jpeg';
import katesmith from './assets/kate-smith.jpeg';
import maxpayne from './assets/max-payne.png';
import suziesmart from './assets/suzie-smart.jpeg';
import johnsmith from './assets/john-smith.jpeg';

/* template
{
  name: '',
  profession: '',
  profile: '',
  experiences: [
    {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      accomplishments: [
        '',
        ''
      ]
    },
    {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      accomplishments: [
        '',
        ''
      ]
    }
  ],
  education: [
    {
      title: '',
      school: '',
      yearGraduated: 
    }
  ],
  headshot: 
},
*/

export const resumes = [
    {
      name: 'Jane Doe',
      profession: 'Software Engineer',
      profile: 'Innovative and detail-oriented software engineer with 5+ years of experience building scalable web applications. Expertise in front-end development and cloud-based solutions..',
      experiences: [
        {
          title: 'Front-End Engineer',
          company: 'Tech Solutions',
          location: 'Denver, CO',
          startDate: 'Jan 2020',
          endDate: 'Present',
          accomplishments: [
            'Developed and maintained React-based applications with over 100k monthly users.',
            'Implemented CI/CD pipelines, reducing deployment time by 40%.'
          ]
        },
        {
          title: 'Software Developer Intern',
          company: 'NextGen Software',
          location: 'Boulder, CO',
          startDate: 'May 2019',
          endDate: 'Dec 2019',
          accomplishments: [
            'Built reusable UI components and optimized API integrations.'
          ]
        }
      ],
      education: [
        {
          title: 'BSc in Computer Science',
          school: 'University of Colorado',
          yearGraduated: 2019
        }
      ],
      headshot: janeDoeHeadshot
    },
    {
      name: 'Jim Bob',
      profession: 'Customer Success',
      profile: 'Dynamic and customer-focused VP of Customer Success with 10+ years of experience building and leading high-performing teams. Skilled in client retention strategies, customer advocacy, and driving revenue growth through exceptional service.',
      experiences: [
        {
          title: 'Vice President of Customer Success',
          company: 'GlobalTech Solutions',
          location: 'Chicago, IL',
          startDate: 'Jan 2018',
          endDate: 'Present',
          accomplishments: [
            'Led a team of 50+ customer success managers, achieving a 98% customer retention rate.',
            'Developed a customer health scoring model, reducing churn by 15% year over year.'
          ]
        },
        {
          title: 'Director of Client Services',
          company: 'NextLevel Enterprises',
          location: 'Austin, Tx',
          startDate: 'Mar 2013',
          endDate: 'Dec 2017',
          accomplishments: [
            'Managed key accounts worth $10M annually, achieving a 120% renewal rate.',
            'Implemented a client onboarding program that reduced time-to-value by 30%.'
          ]
        }
      ],
      education: [
        {
          title: 'Certificate in Fine Arts',
          school: 'Prestige Fine Arts Finishing School',
          yearGraduated: 2009
        }
      ],
      headshot: jimBobHeadshot
    },
    {
      name: 'Kate Smith',
      profession: 'Customer Success',
      profile: 'Empathetic and detail-oriented customer success professional with a \
          knack for building strong client relationships and ensuring customer \
          satisfaction. Brings a unique perspective from diverse experiences in \
          caregiving and culinary arts.',
      experiences: [
        {
          title: 'Customer Success Specialist',
          company: 'ClientCare Solutions',
          location: 'Portland, OR',
          startDate: 'Feb 2022',
          endDate: 'Present',
          accomplishments: [
            'Managed a portfolio of 50+ clients, maintaining a 95% satisfaction rate.',
            'Provided personalized onboarding experiences, reducing churn by 20% in the first quarter.'
          ]
        },
        {
          title: 'Professional Babysitter',
          company: 'Independent Contractor',
          location: 'Portland, OR',
          startDate: 'Jan 2017',
          endDate: 'Jan 2022',
          accomplishments: [
            'Built trust with families through consistent communication and reliability.',
            'Developed creative and engaging activities tailored to individual childrens needs.'
          ]
        }
      ],
      education: [
        {
          title: 'Certificate in Culinary Arts',
          school: 'Portland Culinary Academy',
          yearGraduated: 2016
        }
      ],
      headshot: katesmith
    },
    {
      name: 'Max Payne',
      profession: 'Product Manager',
      profile: 'Strategic and results-oriented product manager with 7+ years of \
          experience leading cross-functional teams to deliver innovative \
          software solutions. Expertise in agile methodologies, roadmap \
          planning, and user-centered design.',
      experiences: [
        {
          title: 'Senior Product Manager',
          company: 'InnovateTech Solutions',
          location: 'New York, NY',
          startDate: 'Mar 2018',
          endDate: 'Present',
          accomplishments: [
            'Led the development and launch of a SaaS platform, increasing user adoption by 50% within the first year.',
            'Blood bled, sweat seeped, tears rolled.'
          ]
        },
        {
          title: 'Product Manager',
          company: 'NextWave Apps',
          location: 'Boston, MA',
          startDate: 'Jan 2015',
          endDate: 'Feb 2018',
          accomplishments: [
            'Managed the end-to-end lifecycle of a mobile app, achieving a 4.8-star rating on the App Store.',
            'Conducted market research and user interviews to define product requirements and drive development.',
            'Licked boots',
          ]
        }
      ],
      education: [
        {
          title: 'B.A. in Business Administration',
          school: 'Hahvahd Uni',
          yearGraduated: 2014
        }
      ],
      headshot: maxpayne
    },
    {
      name: 'Suzie Smart',
      profession: 'Product Manager',
      profile: 'Motivated and adaptable product manager with a knack for streamlining \
          workflows and ensuring team alignment. Known for creativity, \
          dedication, and a hands-on approach to problem-solving.',
      experiences: [
        {
          title: 'Junior Product Manager',
          company: 'BrightPath Solutions',
          location: 'Remote',
          startDate: 'Jan 2022',
          endDate: 'Present',
          accomplishments: [
            'Did the thing',
            'Did another thing',
            'Did more things',
          ]
        },
        {
          title: 'Product Coordinator',
          company: 'Smart Innovations LLC',
          location: 'Seattle, WA',
          startDate: 'Jun 2020',
          endDate: 'Dec 2021',
          accomplishments: [
            'Hmmm',
            'You know, like uh, did that.'
          ]
        }
      ],
      education: [
        {
          title: 'High School Diploma',
          school: 'Westworld High',
          yearGraduated: 1855
        }
      ],
      headshot: suziesmart
    },
    {
      name: 'John Smith',
      profession: 'Back-End Developer',
      profile: 'Results-driven software engineer with a passion for back-end \
          development and data engineering. Skilled in Python, Go, and \
          distributed systems.',
      experiences: [
        {
          title: 'Back-End Developer',
          company: 'DataWorks Inc',
          location: 'Austin, TX',
          startDate: 'Feb 1999',
          endDate: 'Present',
          accomplishments: [
            'Designed microservices architecture for analytics platform handling 2M+ daily transactions.',
            'Improved database query performance by 30%.'
          ]
        },
        {
          title: 'Software Engineer Intern',
          company: 'Lumon',
          location: 'Unknown',
          startDate: 'Dec 1978',
          endDate: 'Feb 1999',
          accomplishments: [
            'Not sure',
            'No really, I am really not sure',
            'Like, you do not understand, I cannot remember.'
          ]
        }
      ],
      education: [
        {
          title: 'B.S. In Software Engineering',
          school: 'Texas A&F University',
          yearGraduated: 1978
        }
      ],
      headshot: johnsmith
    },
  ];