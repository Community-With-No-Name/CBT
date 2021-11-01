import React from 'react'
import { UserGroupIcon, UsersIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"

export default function Stats() {
    const stats = [
        { href: `/school/students`,id: 1, name: 'Total Questions', stat: 50, icon: UserGroupIcon},
        { href: `/school/staffs`,id: 2, name: 'Total Right Answers', stat: 50, icon: UsersIcon},
        { href: `/school/classes`,id: 3, name: 'Speed and Accuracy', stat: 50, icon: OfficeBuildingIcon},
      ]
    return (
        <>
    <div>
      <div className="pt-5" />
    <h1 className="text-2xl font-semibold text-gray-900">Your Stats</h1>

      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className="absolute p-3 bg-gray-500 rounded-md">
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate font-dosis">{item.name}</p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 font-dosis">{item.stat}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
    </>
    )
}
