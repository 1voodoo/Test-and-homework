

const Repo = (props) => {
    const repo = props.repo
    return (
        <div>
            <div>
                <div>{repo.title}</div>
            </div>
        </div>
    );
};

export default Repo;