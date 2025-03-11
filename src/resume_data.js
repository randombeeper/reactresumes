import janeDoeHeadshot from './assets/jane-doe.jpeg';
import jimBobHeadshot from './assets/jim-bob.jpeg';

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
  ];