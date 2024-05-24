import ModuleBarButton from "@/components/elements/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Content from "@/components/layouts/PageContent";
import Page from "@/components/layouts/page";
import Image from 'next/image'
import Link from 'next/link'

export default function Signin() {
    return (
        <Page>
          <Content
            header = {
                <div>
                    <div style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}>
                      Hello!
                    </div>
                    <div style={{
                        fontSize: "1.25rem",
                    }}>
                      Welcome Back!
                    </div>
                </div>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 8,
            }}>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: 8,
                }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: 8,
                }}>
                  {/* <div style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}>
                    Actions
                  </div> */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                  }}>
                    <Link href='/signin'>
                      <div style={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      }}>
                        <LoginOutlinedIcon />
                      </div>
                    </Link>
                    <Link href='/signup'>
                      <div style={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      }}>
                        <PersonAddOutlinedIcon />
                      </div>
                    </Link>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: 8,
                }}>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}>
                    Apps
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                  }}>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#CDDEFF',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest Gate
                      </div>
                    </div>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest Account
                      </div>
                    </div>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest Admin
                      </div>
                    </div>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest Dev
                      </div>
                    </div>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest Health
                      </div>
                    </div>
                    <div style={{
                      width: 140,
                      height: 160,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div>
                        Forest <br></br> Achievement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: 8,
                }}>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}>
                    Shortcuts
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                  }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <LoginOutlinedIcon />
                    </div>
                    <div style={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <PersonAddOutlinedIcon />
                    </div>
                    <div style={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <PersonAddOutlinedIcon />
                    </div>
                    <div style={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <PersonAddOutlinedIcon />
                    </div>
                  </div>
                </div>
              {/* <div style={{
                width: 800,
                height: 500,
                backgroundColor: '#CDDEFF',
                borderRadius: 8,
              }}>
                <Image
                  src="/fabrizio-conti-kXVogATbFgA-unsplash.jpg"
                  width={800}
                  height={500}
                  alt="Logo"
                  style={{
                    borderRadius: 8,
                  }}
                  />

              </div> */}
            </div>
          </Content>
        </Page>
    )
}