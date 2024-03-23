import React from 'react'
import MainLayout from '../../components /MainLayout'
import BreadCrumbs from '../../components /BreadCrumbs'
import { images } from '../../constants';
import { Link } from 'react-router-dom';


const BreadCrumbsData = [
    {name:"Home", link: "/" },
    {name:"Blog", link: "/blog" },
    {name:"Article title", link: "/blog/1" },

];


const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
            <article className='flex-1'>
                <BreadCrumbs data={BreadCrumbsData}/>
                <img className='rounded-xl w-full ' src={images.Post1Image} alt="laptop" />
                <Link to="/blog?category=selectedCategory' className='text-primary text-sm font-roboto inline-block mt-4">
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard'>Help children get better education</h1>
                <div className='mt-4 text-dark-soft'>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae 
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat 
                        imperdiet sed euismod nisi porta lorem mollis. Morbi tristique 
                        senectus et netus. Mattis pellentesque id nibh tortor id aliquet 
                        lectus proin.
                        </p>

                </div>
            </article>
        </section>
    </MainLayout>


    );
};

export default ArticleDetailPage;