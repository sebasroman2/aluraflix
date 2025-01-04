import { Link } from "react-router-dom"
import { Button, useMediaQuery } from "@mui/material"
import React from "react";

function CabeceraLink({ url, location, icono, children }) {
    const noFocus = {
        borderColor: 'white',
        color: 'white'
    };

    const isSmallScreen = useMediaQuery('(max-width: 712px)');

    return (
        <Link to={url}>
            {(isSmallScreen && !(location.pathname === url)) ? (
                React.cloneElement(icono,
                    {
                        sx: {
                            fontSize: '45px',
                            color: 'white',
                            textAlign: 'center',
                            position: 'relative',
                            top: '5px',
                        }
                    })
            ) : (
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={icono}
                    label={children}
                    sx={{
                        width: '198px',
                        fontFamily: 'var(--fuente-source)',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        lineHeight: '38px',
                        ...((location.pathname === url) ? { boxShadow: 'inset 0px 0px 3px 3px rgba(0, 121, 255, 0.3)' } : noFocus),
                        '@media (min-width: 713px)': {
                            '& .MuiButton-startIcon': {
                                display: 'none',
                            }
                        },
                    }}
                >
                    {children}
                </Button>
            )}
        </Link>
    )
}

export default CabeceraLink