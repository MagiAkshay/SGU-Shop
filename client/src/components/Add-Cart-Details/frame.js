import React, { useState } from 'react';

// Define the components you want to load
const HomeComponent = () => <div>This is the Home view.</div>;
const AboutComponent = () => <div>This is the About view.</div>;
const ContactComponent = () => <div>This is the Contact view.</div>;

const Frames = () => {
    // State to control which component is displayed
    const [activeComponent, setActiveComponent] = useState(() => HomeComponent);

    // Function to handle button clicks and change the displayed component
    const handleNavigation = (component) => {
        setActiveComponent(() => component);
    };

    return (
        

            {/* "Frame" where the active component is displayed */}
            
      
    );
};

export default Frames;
