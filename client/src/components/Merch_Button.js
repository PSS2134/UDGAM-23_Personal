import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';

const Merch = (props) => {
    return (
<Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
             colorConfig={{backgroundColor:"#F0E266",borderColor:"#736B1F",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
             spacingConfig={{height:"60px"}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <div className="GetTkt" style={{color:"black"}}>BUY MERCH</div>
    </Button>
    );
};

export default Merch;