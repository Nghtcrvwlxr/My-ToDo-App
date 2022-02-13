import React, {FC} from "react";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../../store/utils";

export const InfoPage: FC = () => {

    const isLoggedIn = useTypedSelector(state => state.loginFormReducer.isLoggedIn);

    if (isLoggedIn) {
        return (
            <div>
                <h3 className="center-align">Information Page</h3>
                <p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.
                    </span>
                    <span>
                        Animi aut commodi dolorem ex fugiat officiis qui repellat sed sint tempore! Atque deleniti et fuga, impedit, incidunt iure magnam maiores minima modi necessitatibus non possimus provident, saepe sapiente voluptate.
                    </span>
                    <span>
                        Animi blanditiis distinctio ex harum in, magnam nam odio repellat ut. Ab, accusantium, ad commodi culpa debitis eveniet illo ipsam molestias neque omnis possimus repellat sed soluta suscipit voluptate voluptates!
                    </span>
                    <span>
                        Accusamus, architecto consequatur corporis dolor doloremque dolores ducimus incidunt magnam nam officia praesentium quos repellendus, saepe, sapiente sint soluta voluptatibus? Adipisci aliquid blanditiis impedit nulla repellat sed totam velit voluptates?
                    </span>
                    <span>
                        Architecto aspernatur autem beatae consectetur dignissimos enim iste iusto libero nostrum nulla perspiciatis possimus provident quibusdam, soluta tempore totam ullam vero voluptate. Consectetur debitis harum hic perspiciatis quod veniam voluptatum.
                    </span>
                </p>
            </div>
        );
    }

    return <Navigate to='/login'/>
};
