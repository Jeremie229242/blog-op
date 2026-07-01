

const Etudes = () => {
    return (
      <section id="etudes" className="py-16 reveal-up">
    <h2 className="text-4xl font-bold text-center headline-2 mb-12 flex items-center justify-center">
      <i class="fas fa-briefcase mr-3"></i> Mes compétences
    </h2>
    <div className="max-w-6xl mx-auto relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>
      
      <div className="space-y-12">
        <div className="relative flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <div className="bg-[#ffff00] text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">Web Design</h2>
              <p className="mt-2">Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
            </div>
          </div>
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="w-8 h-8 bg-[#ffff00] border-4 border-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
        
        <div className="relative flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="w-8 h-8 bg-[#ffff00] border-4 border-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="bg-[#ffff00] text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">Website Development</h2>
              <p className="mt-2">Web development involves developing websites from simple pages to complex applications.</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <div className="bg-[#ffff00] text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">Software Development</h2>
              <p className="mt-2">Software development includes designing, creating, testing, and maintaining applications.</p>
            </div>
          </div>
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="w-8 h-8 bg-[#ffff00] border-4 border-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
    )
  }
  
  export default Etudes