import { useState } from "react";
import axios from "axios";
import './Form.css';
axios.defaults.baseURL =
    process.env.NODE_ENV === 'development' && 'http://localhost:8001'

const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        text: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("데이터 제출", formData);


        axios
            .post("/api/v1/demo", {
                username: formData.username,
                text: formData.text,
            })
            .then((res) => {
                if (res.status === 200) {
                    alert("성공입니다요");
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
                alert("전송 실패다");
            });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="form-label">이름 : </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="form-input"
                />
                <label htmlFor="text" className="form-label">텍스트 : </label>
                <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    className="form-input"
                />
                <button type="submit" className="submit-button">제출</button> {/* CSS 클래스 추가 */}
            </form>
        </div>
    );
};

export default Form;
