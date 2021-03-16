import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {Box, renderMarkdown, ResponsiveContainer} from '../components';

export const Register: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.RegisterQuery>(graphql`
        query Register {
            text: file(relativePath: {eq: "register.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return (
        <ResponsiveContainer>
            <Box>
                {renderMarkdown(text.childMarkdownRemark!.htmlAst)}
            </Box>
        </ResponsiveContainer>
    );
};
