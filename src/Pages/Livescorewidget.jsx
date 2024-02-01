import  { useEffect } from 'react';

const LivescoreWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script source to the Livescore widget URL
    script.src = 'https://ls.soccersapi.com/widget/res/w_default/widget.js';
    
    // Set any other attributes if needed
    script.type = 'text/javascript';

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div id="ls-widget" data-w="w_default" className="livescore-widget"></div>
  );
};

export default LivescoreWidget;
