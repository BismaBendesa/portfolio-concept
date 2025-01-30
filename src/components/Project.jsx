import React from 'react'
import shLogo from '../assets/sh-logo.png'
import sbLogo from '../assets/sb-logo.png'
import anLogo from '../assets/an-logo.png'
import shMockup from '../assets/sh-mockup.png'
import sbMockup from '../assets/sb-mockup.png'
import anMockup from '../assets/an-mockup.png'
import figma from '../assets/figma.png'
import webLogo from '../assets/weblogo.png'
import fzLogo from '../assets/farmeduz.png'
import fzMockup from '../assets/farmeduz-mockup.png'
import wgLogo from '../assets/wariga-logo.png'
import wgMockup from '../assets/wariga-mockup.png'
import hbLogo from '../assets/herbnest-logo.png'
import hbMockup from '../assets/herbnest-mockup.png'

export default function Project() {
  return (
    <div className='project'>
      <div className="headline">
        <h2>Project Overview</h2>
        <p>All of the project that I currently working / worked on.</p>
      </div>
      <div className="project-wrapper">
        {/* project card bisa jadi component juga */}
        <div className="project-card">
          <div className="header">
            <img src={shLogo} alt="side hustler" className='project-logo'/>
            <h4>Side Hustler</h4>
          </div>
          <img src={shMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2024 | Bakti BCA Scholarships</strong>
          <p className='project-description'>Aplikasi yang dapat membantu umkm mencari tenaga kerja, dan pencari kerja paruh waktu.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/HMMhYb1ecXa7q2RVE0CPfg/Bakti-BCA?node-id=88-8320&t=g00OJ7bBdg42lRDt-1"><img src={figma} alt="Figma-links" />Figma</a>
            {/* <a href=""><img src="" alt="" /> Web</a> */}
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="project-card">
          <div className="header">
            <img src={sbLogo} alt="Serene Bali" className='project-logo'/>
            <h4>Serene Bali</h4>
          </div>
          <img src={sbMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2024 | Freelance</strong>
          <p className='project-description'>Aplikasi tentang manajemen properti untuk pemasaran properti perusahaan.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/T1ht20ynuNnl1VUZylA5Kq/Serene-Project?node-id=89-224&t=6PIZEvabKKzpZXwb-1"><img src={figma} alt="Figma-links" />Figma</a>
            <a href="https://serenebaliproperty.com/public/"><img src={webLogo} alt="website-links" /> Web</a>
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="project-card">
          <div className="header">
            <img src={anLogo} alt="AniMaru" className='project-logo'/>
            <h4>AniMaru</h4>
          </div>
          <img src={anMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2023 | Top 5 Invention Udayana</strong>
          <p className='project-description'>Aplikasi khusus untuk pet lovers yang ingin mengurusi seluruh keperluan hewan dalam satu genggaman.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/P79jXEPVjqMzgKuTwnajtC/Invention-2023?node-id=323-2425&t=TlXaKZ2nLafwvMVV-1"><img src={figma} alt="Figma-links" />Figma</a>
            {/* <a href=""><img src="" alt="" /> Web</a> */}
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="project-card">
          <div className="header">
            <img src={fzLogo} alt="side hustler" className='project-logo'/>
            <h4>FarmEduZ</h4>
          </div>
          <img src={fzMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2024 | Infinite Learning Intern</strong>
          <p className='project-description'>Aplikasi mengenai edukasi pertanian modern kepada gen Z maupun petani tradisional.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/vgZRmKmvIuqg5yB8aDABSb/Desain?node-id=1822-5186&t=BVSPSIn3y3RC0viv-1"><img src={figma} alt="figma-links" />Figma</a>
            <a href="https://greennext-nu.vercel.app/"><img src={webLogo} alt="website-links"/> Web</a>
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="project-card">
          <div className="header">
            <img src={wgLogo} alt="side hustler" className='project-logo'/>
            <h4>Wariga Project</h4>
          </div>
          <img src={wgMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2023 | External College Project</strong>
          <p className='project-description'>Aplikasi mengenai ramalan tradisional wariga yang berpatok pada kelahiran tiap manusia.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/e8Jz8vckEPJT0D881nftgA/Wariga-Project?node-id=18-3&t=Wr1FKN1Yd0C1bclj-1"><img src={figma} alt="figma-links" />Figma</a>
            {/* <a href="https://greennext-nu.vercel.app/"><img src={webLogo} alt="website-links"/> Web</a> */}
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="project-card">
          <div className="header">
            <img src={hbLogo} alt="side hustler" className='project-logo'/>
            <h4>HerbNest</h4>
          </div>
          <img src={hbMockup} alt="mockup side hustler" className='project-mockup'/>
          <strong>2023 | Internal College Project</strong>
          <p className='project-description'>Aplikasi mengenai katalog tanaman obat dan ramuan tradisional.</p>
          <div className='links'>
            <a href="https://www.figma.com/design/pfPgLtiwxxXFosxV2ANFQS/HerbNest-%7C-RPL-E-22?node-id=381-5950&t=UTIF8pMM2MnWjIsr-1"><img src={figma} alt="figma-links" />Figma</a>
            {/* <a href="https://greennext-nu.vercel.app/"><img src={webLogo} alt="website-links"/> Web</a> */}
          </div>
          <div className="footer">
            <div className='like-wrapper'>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_26_289)">
                <path d="M4.19165 5.6864C3.56937 6.30866 3.07576 7.0474 2.73899 7.86044C2.40222 8.67347 2.22888 9.54487 2.22888 10.4249C2.22888 11.3049 2.40222 12.1763 2.73899 12.9894C3.07576 13.8024 3.56937 14.5411 4.19165 15.1634L15.6313 26.6031L27.071 15.1634C28.3278 13.9067 29.0338 12.2022 29.0338 10.4249C29.0338 8.64761 28.3278 6.94313 27.071 5.6864C25.8143 4.42967 24.1098 3.72365 22.3326 3.72365C20.5553 3.72365 18.8508 4.42967 17.5941 5.6864L15.6313 7.64911L13.6686 5.6864C13.0464 5.06413 12.3076 4.57051 11.4946 4.23374C10.6816 3.89697 9.81017 3.72363 8.93014 3.72363C8.05012 3.72363 7.17872 3.89697 6.36569 4.23374C5.55265 4.57051 4.81391 5.06413 4.19165 5.6864Z" stroke="#2B2B28" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_26_289">
                <rect width="29.7831" height="29.7831" fill="white" transform="translate(0.739746 0.745117)"/>
                </clipPath>
                </defs>
              </svg>
              <span className='like-count'>123</span>
            </div>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.452 20.6338C13.7529 20.0322 13.9226 19.3531 13.9226 18.6354C13.9226 17.9176 13.7529 17.2385 13.452 16.6369M13.452 20.6338C13.0019 21.5338 12.261 22.2555 11.3495 22.6819C10.438 23.1084 9.40918 23.2145 8.42978 22.9833C7.45038 22.752 6.57775 22.1968 5.95327 21.4077C5.32878 20.6186 4.98901 19.6417 4.98901 18.6354C4.98901 17.629 5.32878 16.6522 5.95327 15.863C6.57775 15.0739 7.45038 14.5187 8.42978 14.2875C9.40918 14.0562 10.438 14.1624 11.3495 14.5888C12.261 15.0152 13.0019 15.7369 13.452 16.6369M13.452 20.6338L23.3281 25.5719M13.452 16.6369L23.3281 11.6989M23.3281 25.5719C22.7981 26.6319 22.7109 27.8591 23.0857 28.9834C23.4605 30.1078 24.2665 31.0372 25.3266 31.5672C26.3866 32.0972 27.6138 32.1844 28.7381 31.8097C29.8625 31.4349 30.7919 30.6288 31.3219 29.5688C31.8519 28.5087 31.9392 27.2815 31.5644 26.1572C31.1896 25.0328 30.3835 24.1034 29.3235 23.5734C28.7986 23.311 28.2272 23.1545 27.6418 23.1129C27.0564 23.0713 26.4686 23.1454 25.9119 23.331C24.7876 23.7057 23.8581 24.5118 23.3281 25.5719ZM23.3281 11.6989C23.5906 12.2237 23.9538 12.6916 24.3971 13.076C24.8404 13.4604 25.355 13.7537 25.9117 13.9392C26.4683 14.1248 27.0561 14.1988 27.6413 14.1572C28.2266 14.1155 28.7979 13.959 29.3227 13.6966C29.8475 13.4341 30.3155 13.0709 30.6999 12.6276C31.0843 12.1843 31.3776 11.6697 31.5631 11.113C31.7486 10.5564 31.8227 9.96863 31.781 9.38336C31.7394 8.79809 31.5829 8.22676 31.3204 7.70198C30.7904 6.64213 29.8611 5.83625 28.7369 5.4616C27.6127 5.08696 26.3857 5.17425 25.3258 5.70427C24.266 6.2343 23.4601 7.16363 23.0855 8.28784C22.7108 9.41204 22.7981 10.639 23.3281 11.6989Z" stroke="black" stroke-width="2.97831" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
