import "./index.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Banner from "../../Components/Banner";
import GetInTouch from "../../Components/GetInTouch";

function TermsAndConditions() {

    return (
        <div className="terms-and-conditions-screen">
            <Header />
            <Hero title={"TERMS & CONDITIONS"} />
            <div className="terms-and-conditions-container">
                <div className="terms-and-conditions-content">
                    <div className="terms-text">
                        <div className="terms-section">
                            <h2>1. INTRODUCTION</h2>
                            <p>These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions.</p>
                            <p>This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.</p>
                        </div>

                        <div className="terms-section">
                            <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
                            <p>Other than content you own, which you may have opted to include on this Website, under these Terms, Crafted Smiles Studio and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.</p>
                            <p>You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website,</p>
                        </div>

                        <div className="terms-section">
                            <h2>3. RESTRICTIONS</h2>
                            <p>You are expressly and emphatically restricted from all of the following:</p>
                            <ul>
                                <li>publishing any Website material in any media;</li>
                                <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                                <li>publicly performing and/or showing any Website material;</li>
                                <li>using this Website in any way that is, or may be, damaging to this Website;</li>
                                <li>using this Website in any way that impacts user access to this Website;</li>
                                <li>using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;</li>
                                <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;</li>
                                <li>using this Website to engage in any advertising or marketing;</li>
                            </ul>
                            <p>Certain areas of this Website are restricted from access by you and Crafted Smiles Studio may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality of such information.</p>
                        </div>

                        <div className="terms-section">
                            <h2>4. YOUR CONTENT</h2>
                            <p>In these Website Standard Terms And Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Crafted Smiles Studio a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
                            <p>Your Content must be your own and must not be infringing on any third party’s rights. Crafted Smiles Studio reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.</p>
                        </div>

                        <div className="terms-section">
                            <h2>5. NO WARRANTIES</h2>
                            <p>This Website is provided “as is,” with all faults, and Crafted Smiles Studio makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.</p>
                        </div>

                        <div className="terms-section">
                            <h2>6. LIMITATION OF LIABILITY</h2>
                            <p>In no event shall Crafted Smiles Studio, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Crafted Smiles Studio, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                        </div>

                        <div className="terms-section">
                            <h2>7. INDEMNIFICATION</h2>
                            <p>You hereby indemnify to the fullest extent Crafted Smiles Studio from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.</p>
                        </div>

                        <div className="terms-section">
                            <h2>8. SEVERABILITY</h2>
                            <p>If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.</p>
                        </div>

                        <div className="terms-section">
                            <h2>9. VARIATION OF TERMS</h2>
                            <p>Crafted Smiles Studio is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.</p>
                        </div>

                        <div className="terms-section">
                            <h2>10. ASSIGNMENT</h2>
                            <p>Crafted Smiles Studio shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
                        </div>

                        <div className="terms-section">
                            <h2>11. ENTIRE AGREEMENT</h2>
                            <p>These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Crafted Smiles Studio and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.</p>
                        </div>

                        <div className="terms-section">
                            <h2>12. GOVERNING LAW & JURISDICTION</h2>
                            <p>These Terms will be governed by and construed in accordance with the laws of the State of NSW, and you submit to the non-exclusive jurisdiction of the state and federal courts located in NSW for the resolution of any disputes.</p>
                        </div>

                        <div className="terms-section">
                            <h2>13. PROMOTIONS</h2>
                            <p>Any promotions offered on this site such as discounted or free products and/or services are for new patients/customers only. Existing patients/customers are not eligible for said promotions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    )
}

export default TermsAndConditions;
