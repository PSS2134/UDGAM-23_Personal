import { Button } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { colorPalette } from '@cred/neopop-web/lib/primitives';
import { ToastContainer, toast } from 'react-toastify';
const CountIn = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
             colorConfig={{backgroundColor:"#F0E266",borderColor:"black",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
             spacingConfig={{height:"60px"}}
            onClick={() => {
                toast("COMING SOON !!");
            }}
        >
            <div className="GetTkt" style={{color:"black"}}>COUNT ME IN</div>
    </Button>
    );
};

export default CountIn;