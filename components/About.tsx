export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a detail-oriented IT professional with experience in virtual assistance, data management,
              and web development. I specialize in supporting U.S.-based operations remotely, managing
              high-volume data, and maintaining accurate records with strong attention to detail.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a Bachelor&apos;s degree in Information Technology and hands-on experience in ticket operations,
              data verification, and spreadsheet management, I bring a combination of technical skills and
              organizational excellence to every project. I&apos;m proficient in modern web technologies and
              always eager to expand my skill set.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Detail-Oriented</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Organized & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Remote Work Expert</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg p-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      4+ years at Ubik Analytic (2022-2026)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Role
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Administrative & Operations Support
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Education
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      BS Information Technology (GWA 2.0)
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Philippine Christian University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
