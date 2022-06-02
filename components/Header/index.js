export default function Header()
{
    return (
        <header id="header" className="clearfix" data-ma-theme="blue">
            <ul className="h-inner">
                <li className="hi-trigger ma-trigger" data-ma-action="sidebar-open" data-ma-target="#sidebar">
                    <div className="line-wrap">
                        <div className="line top"></div>
                        <div className="line center"></div>
                        <div className="line bottom"></div>
                    </div>
                </li>

                <li className="hi-logo hidden-xs">
                    <a href="index.html">Material Admin</a>
                </li>

                <li className="pull-right">
                    
                </li>
            </ul>

        </header>
    )
}