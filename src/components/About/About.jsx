export default function About() {
   return (
       <div className="py-16 bg-white">
           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                   <div className="md:5/12 lg:w-5/12">
                       <img
                           src="image2.avif"
                           alt="image"
                       />
                   </div>
                   <div className="md:7/12 lg:w-6/12">
                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           About me and my journey
                       </h2>
                       <p className="mt-6 text-gray-600">
                       My journey as a JavaScript developer began during my first year at IIT Jodhpur, where I delved into the world of programming with curiosity. I initiated my exploration by crafting a map application using Kotlin, setting the stage for my venture into the dynamic realm of software development.
                       </p>
                        <p className="mt-6 text-gray-600">
                        Fueled by a fervent passion for technology, I immersed myself in JavaScript, mastering libraries like React and Vue.js, and delving into advanced frameworks such as Next.js. I dedicated countless hours to refining my skills and contributing to various projects in my college and also open-source projects on Github.
                        </p>
                       <p className="mt-4 text-gray-600">
                       Today, I remain committed to making good contribution to open-source and creating usefull softwares. As I continue to sharpen my development skills, I am poised to leave an indelible mark on the world of technology, creating tech that inspires fellow developers.
                       </p>
                   </div>
               </div>
           </div>
       </div>
   );
}