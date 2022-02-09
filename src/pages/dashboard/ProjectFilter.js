
const filterList = ['all','mine','development','sales','marketing','design']

const ProjectFilter = ({currentFilter,changeFilter}) => {


    const handleClick = (newFilter) => {
        changeFilter(newFilter)
    }

    return (
        <div className={'project-filter'}>
            <nav>
                <p>Filter By :</p>
                {filterList.map((f) => (
                    <button key={f}
                            onClick={()=>handleClick(f)}
                            //if the currentFilter and the f in match we apply active class for current filter
                            className={currentFilter === f ? 'active' : ''}>
                        {f}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default ProjectFilter;
