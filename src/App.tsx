import './App.css';

export default function App() {
    return (
        <div className="app-wrapper">
            {/* Left Sidebar - 20% */}
            <div className="sidebar">
                <div className="sidebar-content">
                    {/* Logo */}
                    <div className="logo-container">
                        <img src="/src/assets/darvis-logo.png" alt="Logo" className="logo-placeholder" />
                    </div>

                    {/* Status */}
                    <div className="status-card">
                        <div className="status-icon">
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className="status-text">
                            <div className="status-label">Status</div>
                            <div className="status-value">Active</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="footer">
                        © 2025 All rights reserved by dfinite
                    </div>
                </div>
            </div>

            {/* Right Image Area - 80% */}
            <div className="image-area">
                <div className="image-container">
                    <img src="/src/assets/dravis-demo.png" alt="Main" className="main-image" />
                </div>
            </div>
        </div>
    );
}