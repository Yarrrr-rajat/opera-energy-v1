export default function Stats() {
    const stats = [
      { value: '110', label: 'Project Completed', icon: '/section3_1.gif' },
      { value: '90', label: 'Professional Staff', icon: '/section3_2.gif' },
      { value: '12', label: 'Years Of Experience', icon: '/section3_3.gif' },
      { value: '170', label: 'Happy Clients', icon: '/section3_4.gif' },
    ];
  
    return (
      <section className="relative bg-white md:h-52 h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/section3.png')" }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute z-10 md:top-1/3 top-6 md:w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
          <div key={index}>
            <div className="md:text-4xl text-2xl font-bold mb-1">{stat.value}</div>
            <div className="md:text-lg font-medium mb-3">{stat.label}</div>
            <div className="flex justify-center">
              <div className="bg-white/20 p-3 rounded-full">
                <div className="bg-white p-4 rounded-full shadow-lg md:w-20 w-16 h-16 md:h-20 flex items-center justify-center">
                  <img src={stat.icon} alt={stat.label} className="md:w-12 md:h-12 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    );
  }
  