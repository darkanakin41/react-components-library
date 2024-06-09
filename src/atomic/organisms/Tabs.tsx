import {useState} from "react";
import {NavigatorTab, Tab, TabNavigatorProps} from "../molecules/navigator/NavigatorTab.tsx";

export type EnhancedTab = {
    component?: JSX.Element;
} & Tab;

export type TabsProps = Omit<TabNavigatorProps<EnhancedTab>, 'currentTab' | 'onTabClick'>;

export const Tabs = ({
                         tabs,
                         prevNext = false,
                         expanded = false
                     }: TabsProps) => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <>
        <NavigatorTab
            currentTab={currentTab}
            onTabClick={setCurrentTab}
            tabs={tabs}
            prevNext={prevNext}
            expanded={expanded}
        />
        {
            tabs[currentTab]?.component
        }
    </>
    );
}
