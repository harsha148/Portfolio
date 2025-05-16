-- Insert Personal Info
INSERT INTO personal_info (name, headline, bio, profile_image_url, banner_image_url)
VALUES (
    'SAI HARSHA KANTAMANENI',
    'Software Engineer | ML Engineer | Full Stack Developer',
    'Experienced software engineer with a strong background in full-stack development, machine learning, and data engineering. Currently pursuing MS in Computer Science at Rutgers University with a perfect GPA of 4.0/4.0. Proven track record in developing high-performance applications and implementing ML solutions.',
    'https://your-profile-image-url.com/image.jpg',  -- You'll need to add your actual image URLs
    'https://your-banner-image-url.com/banner.jpg'
);

-- Insert Work Experience
INSERT INTO work_experience (company, role, start_date, end_date, description, company_url, location, display_order)
VALUES 
    (
        'Rutgers University',
        'Research Assistant',
        '2024-02-01',
        '2024-09-30',
        'Built a high-performance object detection model with YOLOv8 and transfer learning to detect components in URS-10 test strips, achieving a mean average precision (mAP50-90) of 0.98. Strengthened detection accuracy by 2% through domain-specific pre-training. Engineered a system to predict chemical concentrations using color intensities extracted across multiple color spaces with OpenCV, achieving a 90% reduction in analysis time.',
        'https://www.rutgers.edu',
        'New Brunswick, NJ',
        1
    ),
    (
        'Wells Fargo',
        'Software Engineer',
        '2021-07-01',
        '2023-12-31',
        'Collaborated with a team of 15 developers to create and maintain a payments application within the Capital Markets division, handling FED and SWIFT wire transfers worth $1 billion daily. Accelerated processing speed by 50% by engineering high-performance RESTful APIs. Improved average query response times by 400ms through optimization of database queries. Rebuilt the user interface with React and TypeScript to ensure cross-browser compatibility, improving page load time by 80%.',
        'https://www.wellsfargo.com',
        'Hyderabad, India',
        2
    ),
    (
        'Oravel Stays Pvt Ltd',
        'Software Engineer Intern',
        '2021-01-01',
        '2021-06-30',
        'Streamlined API health-metrics communication for 10+ services by developing an application to fetch Prometheus metrics and send email reports to technical leads at regular intervals. Hosted the application on AWS Lambda, ensuring monitoring with an EventBridge schedule rule for automated execution.',
        'https://www.oyo.com',
        'Hyderabad, India',
        3
    ),
    (
        'Nucleus Software',
        'Software Engineer Intern',
        '2020-07-01',
        '2020-12-31',
        'Engineered a chatbot leveraging Rasa with a user-friendly interface to streamline financial services, incorporating speech-to-text and text-to-speech for improved accessibility. Integrated facial recognition and OCR to enhance security measures and reduce data entry time by 40%.',
        'https://www.nucleussoftware.com',
        'Noida, India',
        4
    );

-- Insert Education
INSERT INTO education (institution, degree, major, start_date, end_date, details, gpa, institution_url, location, display_order)
VALUES 
    (
        'Rutgers University - New Brunswick',
        'Master of Science',
        'Computer Science',
        '2024-01-01',
        '2025-12-31',
        'Coursework: Systems & Machine Learning (Princeton exchange), Database Management Systems, Natural Language Processing',
        4.00,
        'https://www.rutgers.edu',
        'New Jersey, USA',
        1
    ),
    (
        'Birla Institute of Technology & Science (BITS), Pilani',
        'B.E + M.Sc.',
        'Electronics & Instrumentation + Biological Sciences',
        '2017-08-01',
        '2021-05-31',
        'Coursework: Data Structures & Algorithms, Object Oriented Programming, Operating Systems, Neural Networks',
        NULL,
        'https://www.bits-pilani.ac.in',
        'Pilani, India',
        2
    );

-- Insert Technologies/Skills
INSERT INTO technologies (name, category, icon_url, proficiency)
VALUES 
    -- Programming Languages
    ('Python', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 5),
    ('Java', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', 5),
    ('JavaScript', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', 4),
    ('TypeScript', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', 4),
    ('C#', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', 4),
    ('C++', 'Programming Languages', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', 3),
    
    -- Frontend
    ('React', 'Frontend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', 4),
    ('Next.js', 'Frontend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', 4),
    
    -- Backend
    ('Node.js', 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', 4),
    ('Spring Boot', 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg', 5),
    ('Django', 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg', 4),
    ('Flask', 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg', 4),
    ('FastAPI', 'Backend', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', 4),
    
    -- AI/ML
    ('PyTorch', 'AI/ML', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', 4),
    ('LangChain', 'AI/ML', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/langchain/langchain-original.svg', 4),
    
    -- Databases
    ('SQL', 'Databases', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', 4),
    ('MongoDB', 'Databases', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', 4),
    ('Redis', 'Databases', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', 4),
    
    -- DevOps
    ('Docker', 'DevOps', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', 4),
    ('Kubernetes', 'DevOps', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg', 4),
    ('Jenkins', 'DevOps', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg', 4),
    ('AWS', 'Cloud', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', 4),
    ('Kafka', 'Message Broker', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg', 4);

-- Insert Projects
INSERT INTO projects (
    title,
    short_description,
    long_description,
    github_url,
    live_demo_url,
    image_urls,
    featured,
    status,
    start_date,
    end_date,
    display_order
)
VALUES 
    (
        'AI Job Application Tracker',
        'Real-time job tracking platform using GPT-4 and Google Cloud APIs',
        'Created a real-time job tracker with GPT-4, Google Cloud APIs, and BERT-based transformers to process 100+ job applications daily, automating status updates through email parsing and analyzing resumes to identify skill gaps and suggest improvements. Won ''MLH Best Use of MongoDB'' award at HackRU S25 for designing an efficient database for email storage and querying.',
        'https://github.com/harsha148/ai-job-tracker',
        NULL,
        ARRAY['https://project-images.com/ai-job-tracker1.jpg'],
        true,
        'completed',
        '2025-02-01',
        NULL,
        1
    ),
    (
        'Real-Time Notification System',
        'Microservices-based notification system using Apache Kafka and Camel',
        'Programmed a real-time notification system with a microservices architecture to manage user subscriptions and notifications. Integrated Apache Camel to fetch and transform data from 3+ external sources and utilized Apache Kafka to process and deliver over 1,000 messages per minute.',
        'https://github.com/harsha148/notification-system',
        NULL,
        ARRAY['https://project-images.com/notification-system1.jpg'],
        true,
        'completed',
        '2024-09-01',
        '2024-12-31',
        2
    ),
    (
        'Real-Time Notification System',
        'Microservices-based notification system using Apache Kafka and Camel',
        'Programmed a real-time notification system with a microservices architecture to manage user subscriptions and notifications. Integrated Apache Camel to fetch and transform data from 3+ external sources and utilized Apache Kafka to process and deliver over 1,000 messages per minute.',
        'https://github.com/harsha148/notification-system',
        NULL,
        ARRAY['https://project-images.com/notification-system1.jpg'],
        true,
        'completed',
        '2024-09-01',
        '2024-12-31',
        2
    );

-- Insert Project Technologies
INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM projects p, technologies t
WHERE 
    (p.title = 'AI Job Application Tracker' AND t.name IN ('Python', 'FastAPI', 'React', 'MongoDB')) OR
    (p.title = 'Real-Time Notification System' AND t.name IN ('Java', 'Spring Boot', 'Kafka', 'Docker')); 