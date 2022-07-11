import { Link } from 'evergreen-ui';

function HeaderLink({ index, url, label, active }) {
    const color = active ? '' : 'neutral';

    return (

        <Link
            key={index}
            href={url}>{label}
        </Link>
    );
}

export default HeaderLink;
