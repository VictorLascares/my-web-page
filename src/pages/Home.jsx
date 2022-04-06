import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <main >
                <div className="row g-0">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h1 className="card-title d-flex flex-column text-uppercase h3">My Name is <span className='h1 fw-bold'>Victor Lascares</span></h1>
                            <p className="card-text bg-info  d-inline p-2 text-uppercase h4">I'm Web Developer</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="/src/assets/img/myAvatar.png" className="img-fluid rounded-start" alt="Avatar"/>
                    </div>
                </div>
            </main>
            <section id='about' className='vh-100' style={{background: '#F4F4F4'}}>
                <div className="h-100 container-sm py-4">
                    <h2 className=' text-center text-uppercase'>About Me</h2>
                    <div className="h-100 row justify-content-md-center align-items-center">
                    <div className="col-sm-4">
                        <img className='img-fluid' src="/src/assets/img/profile.png" alt="" />
                    </div>
                    <div className="col-sm-8 ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid quidem asperiores, maiores eligendi eius? Voluptatibus debitis assumenda harum autem facere cum maiores quae, consectetur dolores ipsum quis fuga odit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti distinctio non dolor quam, unde sint adipisci consequuntur, ipsa nemo, inventore temporibus nesciunt possimus. Rem excepturi quibusdam labore officia voluptatum.</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home