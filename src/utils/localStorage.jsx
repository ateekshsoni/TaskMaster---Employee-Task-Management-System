// Employee data
const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    password: "7890",
    tasks: [
      {
        id: 101,
        title: "Quarterly Report",
        description: "Prepare Q1 financial report for stakeholders",
        date: "2025-04-15",
        category: "Finance",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 102,
        title: "Client Presentation",
        description: "Create slides for the upcoming client meeting",
        date: "2025-03-22",
        category: "Marketing",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        id: 103,
        title: "Team Meeting",
        description: "Prepare agenda for weekly team sync",
        date: "2025-03-18",
        category: "Management",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        id: 104,
        title: "Project Proposal",
        description: "Draft proposal for the new client project",
        date: "2025-03-31",
        category: "Business Development",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ],
    activeTaskCount: 3, // Count of tasks where active is true
    newTaskCount: 1, // Count of tasks where newTask is true
    completedTaskCount: 1, // Count of tasks where complete is true
    failedTaskCount: 0, // Count of tasks where failed is true
    otherTaskCount: 1   // Count of tasks where active is false
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah.smith@company.com",
    password: "7890",
    tasks: [
      {
        id: 201,
        title: "Website Redesign",
        description: "Coordinate with design team for the new website layout",
        date: "2025-04-10",
        category: "Design",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 202,
        title: "User Testing",
        description: "Conduct user testing for the new mobile app",
        date: "2025-03-25",
        category: "QA",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        id: 203,
        title: "Marketing Campaign",
        description: "Launch the spring marketing campaign on social media",
        date: "2025-04-01",
        category: "Marketing",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      },
      {
        id: 204,
        title: "Analytics Review",
        description: "Analyze Q1 website traffic and conversion rates",
        date: "2025-04-05",
        category: "Analytics",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 205,
        title: "Client Onboarding",
        description: "Prepare onboarding materials for new clients",
        date: "2025-03-20",
        category: "Customer Success",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      }
    ],
    activeTaskCount: 3,
    newTaskCount: 1,
    completedTaskCount: 1,
    failedTaskCount: 1,
    otherTaskCount: 2
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@company.com",
    password: "7890",
    tasks: [
      {
        id: 301,
        title: "Database Migration",
        description: "Migrate user data to the new server infrastructure",
        date: "2025-04-20",
        category: "IT",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 302,
        title: "Security Audit",
        description: "Perform quarterly security audit on all systems",
        date: "2025-04-10",
        category: "Security",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 303,
        title: "API Integration",
        description: "Integrate payment gateway API into the platform",
        date: "2025-03-28",
        category: "Development",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ],
    activeTaskCount: 3,
    newTaskCount: 1,
    completedTaskCount: 0,
    failedTaskCount: 0,
    otherTaskCount: 0
  },
  {
    id: 4,
    name: "Emily Williams",
    email: "emily.williams@company.com",
    password: "7890",
    tasks: [
      {
        id: 401,
        title: "Content Calendar",
        description: "Develop content calendar for Q2",
        date: "2025-03-25",
        category: "Content",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 402,
        title: "SEO Optimization",
        description: "Implement SEO recommendations on product pages",
        date: "2025-04-05",
        category: "SEO",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 403,
        title: "Email Campaign",
        description: "Design and schedule the monthly newsletter",
        date: "2025-03-30",
        category: "Email Marketing",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        id: 404,
        title: "Blog Writing",
        description: "Write three blog posts about recent industry trends",
        date: "2025-04-15",
        category: "Content",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        id: 405,
        title: "Video Script",
        description: "Draft script for product demonstration video",
        date: "2025-04-10",
        category: "Content",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 406,
        title: "Social Media Plan",
        description: "Create weekly social media posting schedule",
        date: "2025-03-20",
        category: "Social Media",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ],
    activeTaskCount: 4,
    newTaskCount: 1,
    completedTaskCount: 1,
    failedTaskCount: 1,
    otherTaskCount: 2
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@company.com",
    password: "7890",
    tasks: [
      {
        id: 501,
        title: "Budget Review",
        description: "Review department budget allocations for Q2",
        date: "2025-03-28",
        category: "Finance",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 502,
        title: "Vendor Negotiations",
        description: "Negotiate new terms with software vendors",
        date: "2025-04-10",
        category: "Procurement",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 503,
        title: "Expense Reports",
        description: "Approve pending expense reports",
        date: "2025-03-22",
        category: "Finance",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        id: 504,
        title: "Hiring Plan",
        description: "Finalize Q2 hiring plan with HR",
        date: "2025-04-01",
        category: "HR",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        id: 505,
        title: "Team Performance Review",
        description: "Complete quarterly performance reviews for team members",
        date: "2025-04-15",
        category: "Management",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 506,
        title: "Strategy Meeting",
        description: "Prepare materials for executive strategy meeting",
        date: "2025-03-31",
        category: "Management",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        id: 507,
        title: "Client Contract",
        description: "Review and sign new client contract",
        date: "2025-03-25",
        category: "Legal",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      }
    ],
    activeTaskCount: 5,
    newTaskCount: 1,
    completedTaskCount: 2,
    failedTaskCount: 0,
    otherTaskCount: 2
  }
];

// Admin data
const admin = [
  {
    id: 101,
    email: "admin@company.com",
    password: "7890"
  }
];

export const setLocalStorage = () => { 
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
