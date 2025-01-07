import Title from './Title';
import Button from './Button';

function Section({ title }) {
    const handleClick = () => {
        alert(title + " 버튼이 클릭되었습니다.");
    };

    return (
        <section>
            <Title title={title} />
            <Button onClick={handleClick} />
        </section>
    );
}

export default Section;
