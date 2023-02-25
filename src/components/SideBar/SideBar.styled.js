import styled from "styled-components";

export const MainSidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;
export const SidebarPersonal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;

export const SidebarExit = styled.img`
    width: 40px;
    height: 40px;
`;
export const SidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const SidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SidebarItem = styled.div`
    width: 250px;
    height: 150px;

    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;
export const SidebarLink = styled.a`
    width: 100%;
    height: 100%;
`;
export const SidebarImg = styled.img`
    width: 100%;
    height: auto;
`;

