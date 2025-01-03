import { Link } from "react-router-dom"
import { Button } from "@mui/material"

function CabeceraLink({ url, location, children }) {
    const noFocus = {
        borderColor: 'white',
        color: 'white'
    };

    return (
        <Link to={url}>
            <Button
                variant="outlined"
                size="large"
                sx={{
                    width: '180px',
                    fontFamily: 'var(--fuente-source)',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    lineHeight: '38px',
                    ...((location.pathname === url) ? { boxShadow: 'inset 0px 0px 3px 3px rgba(0, 121, 255, 0.3)' } : noFocus)
                }}
            >
                {children}
            </Button>
        </Link>
    )
}

export default CabeceraLink