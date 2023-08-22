import { useState } from "uelements";
import "./SizeDropdown.css";
type Props = {}
// @ts-ignore
const SizeDropdown = ({ sizeData, currentSize, onSliderSizeClick, isOpen, setIsOpen }) => {
    console.log("sizes ->", sizeData)

    return (
        <div class="size-dropdown">
            <div class="current-size-wrapper" onClick={() => setIsOpen(!isOpen)}>
                <div class="current-size">
                {currentSize}
                </div>
                <svg className={`arrow-icon ${isOpen? "rotate": ""}`} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z"
                        fill="#33363F" />
                </svg>
            </div>
            <div class={`dropdown-items ${isOpen ? "": "d-none"}`}>
                {/* @ts-ignore */}
                {sizeData && sizeData.map((size, index) => (
                    <div className="dropdown-item" onClick={() => onSliderSizeClick(index)}>{size.title}</div>
                ))}
            </div>
        </div>
    )
}
export default SizeDropdown;