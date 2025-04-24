export default function Process() {
    const steps = [
      {
        title: 'Consult With Us',
        desc: 'Either we or you may approach for consultation for chosen services in the energy sector.',
        icon: '/section4_1.png',
      },
      {
        title: 'Generate Power',
        desc: 'Extra Ordinary efforts and in depth knowledge for power generation process makes us different.',
        icon: '/section4_2.png',
      },
      {
        title: 'Store The Power',
        desc: 'Storage and distribution of the power in a state of the art way can help you to grow fast.',
        icon: '/section4_3.png',
      },
      {
        title: 'Use It Flexibly',
        desc: 'Our expertize of generating and regenerating energy with process driven usage guidelines is best.',
        icon: '/section4_4.png',
      },
    ];
  
    return (
        <section className="md:px-20 py-24 px-4 flex justify-center flex-col gap-10 items-center bg-white text-gray-800">
          <div className="md:w-1/2 gap-6 flex flex-col md:items-center w-full">
            <p className="flex gap-6 text-sm md:text-base text-center">
              <img src="/bullet.svg" alt="Bullet" className="w-10" />
              <em>WORKING PROCESS</em>
            </p>
            <h2 className="text-xl md:text-4xl">
              4 Way To Achive <strong className="text-black">Results</strong>
            </h2>
            <p className="text-gray-400 text-sm md:text-base md:text-center">
              Nature driven choice of energy generation is only a way ahead for overturning damage made due to climate change.
            </p>
          </div>
  
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs mx-auto">
              {index % 2 === 0 ? (
                <>
                  <h3 className="text-lg font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{step.desc}</p>
                  <div className="relative mb-4">
                    <img src={step.icon} alt={step.title} className="h-24" />
                  </div>
                  <span className="text-lg font-semibold text-black">Step {index + 1}</span>
                </>
              ) : (
                <>
                  <span className="text-lg font-semibold text-black mb-4">Step {index + 1}</span>
                  <div className="relative mb-4">
                    <img src={step.icon} alt={step.title} className="h-24" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  