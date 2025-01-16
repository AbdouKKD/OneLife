import React from 'react';

const HowItWorks = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>How It Works</h1>
            
            {/* Introduction */}
            <p>
                Welcome to <strong>Your Website Name</strong>! Our platform makes accessing healthcare services simple and convenient.
                Follow the steps below to start your journey to better health.
            </p>
            
            {/* Steps */}
            <div style={{ margin: '20px 0' }}>
                <h2>Steps to Use Our Platform:</h2>
                <ol>
                    <li><strong>Sign Up or Log In:</strong> Create an account or log in to access your dashboard.</li>
                    <li><strong>Complete Your Profile:</strong> Add details like health history or preferences.</li>
                    <li><strong>Book an Appointment:</strong> Choose a date and time for your consultation.</li>
                    <li><strong>Join Your Appointment:</strong> Attend the session via secure video call.</li>
                    <li><strong>Follow-Up Care:</strong> View prescriptions and recommendations in your account.</li>
                </ol>
            </div>
            
            {/* Features */}
            <div style={{ margin: '20px 0' }}>
                <h2>Features and Benefits:</h2>
                <ul>
                    <li>24/7 access to healthcare professionals.</li>
                    <li>Secure and confidential consultations.</li>
                    <li>Easy scheduling and reminders.</li>
                    <li>Accessible on both desktop and mobile devices.</li>
                </ul>
            </div>
            
            {/* FAQ */}
            <div style={{ margin: '20px 0' }}>
                <h2>Frequently Asked Questions:</h2>
                <p><strong>Q: Is my data secure?</strong></p>
                <p>A: Yes, we use advanced encryption to ensure your data is safe.</p>
                <p><strong>Q: How do I reschedule an appointment?</strong></p>
                <p>A: You can reschedule through your dashboard or by contacting support.</p>
                <p><strong>Q: Can I connect from my mobile device?</strong></p>
                <p>A: Absolutely! Our platform is mobile-friendly and works on all devices.</p>
            </div>
            
            {/* Call-to-Action */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                    onClick={() => window.location.href = '/signup'}
                >
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default HowItWorks;