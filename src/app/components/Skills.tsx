'use client';

import { motion } from 'framer-motion';

const categories = {
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'HTML', 'JavaScript', 'TypeScript', 'Vue', 'Angular', 'AJAX', 'XCode/Swift'],
  'Backend': ['Node.js', 'Spring Boot', 'Django', 'Express', 'Hibernate', 'Flask', 'GraphQL', 'RESTful APIs', '.NET', 'PHP', 'Ruby', 'Go', 'C#', 'Rust'],
  'Data & ML': ['Pandas', 'TensorFlow', 'Scikit-Learn', 'SQL', 'Python', 'R', 'MATLAB', 'Julia', 'NumPy', 'Keras','PyTorch','MLAlgorithms','Dimensionality Reduction', 'NLP', 'RAG', 'Tableau', 'PowerBI', 'Matplotlib'],
  'Databases & Big Data':['SQL', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Cassandra', 'Redis', 'Spark', 'Hadoop', 'Apache'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GCP', 'Azure', 'Helm', 'Terraform', 'Pulumi', 'Github', 'Bash Scripting', 'Airflow', 'Ansible', 'System Configuration', 'Linux Systems', 'TCP/IP'],
  'Development Practices & Methodologies':['Agile', 'Scrum', 'Sprint', 'XP', 'Agile Modeling', 'Kanban', 'Confluence', 'Jira', 'Jenkin', 'Spinnaker', 'Bamboo'],
};

function Skills() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Pit Crew Toolkit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {Object.entries(categories).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-red-500">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
