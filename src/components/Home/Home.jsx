export default function Home() {
   return (
       <div className="mx-auto w-full max-w-7xl mb-7">
           <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
               <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                   <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h1 className="text-4xl text-gray-900">Introduction</h1>
                       <p className="text-xl font-sans text-gray-700">
                        I am <b>Saurabh Rajmane</b>, a third-year Physics student at <b><a href="https://iitj.ac.in" target="new">IIT Jodhpur</a></b>. Alongside my academic journey, I have honed my skills as a proficient JavaScript developer, delving deep into the world of coding and software development. I am also passionate about basketball and proudly represent my college team, demonstrating my athletic abilities on the court. My involvement doesn't stop there; I actively participate in organizing and contributing to various college festivals and events, which has allowed me to develop strong leadership and organizational skills.
                       </p>

            
                   </div>
               </div>

               <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                   <img className="w-96" src="image1.png" alt="image1" />
               </div>
           </aside>
       </div>
   );
}
