import React from 'react'
import { FormattedMessage } from 'react-intl'

export const PlanTable = ({ tour }) => {
    console.log(tour)
    return (
        <table className='table-fixed border-collapse '>
            <tbody>
                <tr>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='departure' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour.meetingPoint}</td>
                </tr>
                <tr className='bg-slate-200  dark:!bg-slate-800 '>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='highlights' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour?.highlights?.map((highlight, index) => (
                        <span key={index}>
                            {highlight}
                            {index !== tour.highlights.length - 1 && <br />}
                        </span>
                    ))}
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='priceInclusions' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour?.inclusions?.map((inclusions, index) => (
                        <span key={index}>
                            {inclusions}
                            {index !== tour.inclusions.length - 1 && <br />}
                        </span>
                    ))}
                    </td>
                </tr>
                <tr className='bg-slate-200  dark:!bg-slate-800'>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='priceExclusions' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour?.exclusions?.map((exclusions, index) => (
                        <span key={index}>
                            {exclusions}
                            {index !== tour.exclusions.length - 1 && <br />}
                        </span>
                    ))}
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='difficulityLevel' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour.difficultyLevel}</td>
                </tr>
                <tr className='bg-slate-200  dark:!bg-slate-800'>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='specialRequirments' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour.specialRequirements}</td>
                </tr>
                <tr>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='languages' />}</td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour?.languages?.map((languages, index) => (
                        <span key={index}>
                            {languages}
                            {index !== tour.languages.length - 1 && <br />}
                        </span>
                    ))}
                    </td>
                </tr>
                <tr className='bg-slate-200  dark:!bg-slate-800'>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{<FormattedMessage id='cancellationPolicy' />} </td>
                    <td className="border border-slate-300 dark:!border-slate-800 p-3 dark:!text-white">{tour.cancellationPolicy}</td>
                </tr>
            </tbody>
        </table>
    )
}
