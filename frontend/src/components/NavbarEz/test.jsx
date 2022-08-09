import React from 'react'
import { Navbar, Group, ScrollArea, createStyles, Title, ActionIcon, } from '@mantine/core';
import {
    Notes,
    CalendarStats,
    Gauge,
    PresentationAnalytics,
    FileAnalytics,
    Adjustments,
    Lock,
    Sun,
    MoonStars,
    Logout
} from 'tabler-icons-react';
import { useHotkeys, } from '@mantine/hooks';
import { LinksGroup } from '../LinksGroup/LinksGroup';
import { Link } from 'react-router-dom';


const mockdata = [
    { label: 'Dashboard', icon: Gauge },
    {
        label: 'Chaos',
        icon: Notes,
        links: [
            { label: 'Products', link: '/products' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Releases',
        icon: CalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Analytics', icon: PresentationAnalytics  },
    { label: 'Contracts', icon: FileAnalytics},
    { label: 'Settings', icon: Adjustments  },
    {
        label: 'Security',
        icon: Lock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];


const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },
}));


const Index = ({ colorScheme, setColorScheme }) => {

    const { classes } = useStyles();
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    const logOut = (e) => {
        localStorage.removeItem("authorization")
        window.location.reload(false)
    }

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <Navbar width={{ sm: 200 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Title order={3} className={classes.title} align="center" mt="md" mb={20}>
                        Hydra
                    </Title>
                    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                        {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                    </ActionIcon>
                </Group>
            </Navbar.Section>

            <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <ActionIcon variant='default' onClick={() => logOut()}>
                    <Logout size={16} />
                </ActionIcon>
            </Navbar.Section>

        </Navbar>
    )
}

export default Index