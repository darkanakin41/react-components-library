import { useCallback } from 'react';
import './NavigatorTab.scss';
import {Button} from "../../atoms/Button.tsx";

type Tab = {
    label: string | JSX.Element;
    tooltip?: string;
    tooltipPosition?: 'left' | 'right' | 'top' | 'bottom';
};

export type TabNavigatorProps<T extends Tab = Tab> = {
    currentTab: number;
    expanded?: boolean;
    onTabClick: (index: number) => void;
    tabs: Array<T>;
    prevNext?: boolean;
};

const NavigatorTab = ({
    currentTab,
    onTabClick,
    tabs,
    prevNext = false,
    expanded = false
}: TabNavigatorProps) => {
    const getTooltipConfiguration = useCallback((tab: Tab) => {
        if (!tab.tooltip) {
            return {};
        }
        return {
            tooltip: tab.tooltip,
            tooltipPosition: tab.tooltipPosition ?? 'top'
        };
    }, []);

    return (
        <div className={`tab-navigator${expanded ? ' tab-navigator--expanded' : ''}`}>
            {prevNext && (
                <Button
                    type="secondary"
                    keystone="a"
                    disabled={currentTab === 0}
                    onClick={() => onTabClick(currentTab - 1)}
                    className="tab-navigator__previous"
                />
            )}
            {tabs.map((tab, index) => (
                <Button
                    type="secondary"
                    {...getTooltipConfiguration(tab)}
                    key={index}
                    isActive={currentTab === index}
                    onClick={() => onTabClick(index)}>
                    {tab.label}
                </Button>
            ))}
            {prevNext && (
                <Button
                    type="secondary"
                    keystone="e"
                    disabled={currentTab === tabs.length - 1}
                    onClick={() => onTabClick(currentTab + 1)}
                    className="tab-navigator__next"
                />
            )}
        </div>
    );
};

export { NavigatorTab };
export type { Tab };
