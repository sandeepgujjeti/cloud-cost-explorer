import React from 'react';
import '../CSS/landing.css';
import img1 from "../assets/cloud-cost.webp";

function TempLanding() {
    return (
        <div className="container">
            <header>
                <h1>Cloud Cost Explorer</h1>
            </header>
            <section className="abstract">
                {/* <h2>abstract</h2> */}
                <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
                    <i> <b> "Track, analyze, and optimize your cloud expenses with real-time dashboards and detailed insights."</b></i>
                </p>
                {/* <p>
                    As companies move more operations to the cloud, managing cloud costs becomes harder.
                    Cloud services provide various services with different pricing, making it difficult
                    for companies to track spending and avoid overspending. Without the right solution,
                    companies may struggle to understand their expenses, leading to unexpected costs.
                </p> */}
                <p>
                    This project is designing an app to track the expenses of a company on cloud services
                    through efficient graphs and dashboards. By providing tools to track, analyze, and
                    optimize expenditures, the project helps reduce unnecessary costs.
                </p>
            </section>
            <img src={img1} alt="cloud cost"></img>
            <section className="guide">
                <h3>Project Guide</h3>
                <p>Dr. K Sathish Kumar</p>
            </section>
            <section className="team">
                <h3>Project Team</h3>
                <ul>
                    <li>Akshaya Reshojula [22202009]</li>
                    <li>Tejasree shaga[222202015]</li>
                    <li>Charan Yama [22202017]</li>
                    <li>Sandeep Gujjeti [22202049]</li>
                    <li>Sreeya Manthurthy [22202062]</li>
                </ul>
            </section>
        </div>
    );
}

export default TempLanding;
