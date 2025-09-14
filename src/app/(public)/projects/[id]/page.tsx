'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { Project } from '@/types/project';
import {
      ArrowLeftIcon,
      EyeIcon,
      CodeBracketIcon,
      CalendarIcon,
      TagIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      SparklesIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { p } from 'framer-motion/client';

export default function ProjectDetailPage() {
      const params = useParams();
      const router = useRouter();
      const [project, setProject] = useState<Project | null>(null);
      const [loading, setLoading] = useState(true);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
            const fetchProject = async (id: string) => {
                  try {
                        const response = await fetch(`/api/projects/${id}`);
                        const data = await response.json();
                        console.log('Project data:', data); // Debug log
                        if (response.ok) {
                              setProject(data.project);
                        } else {
                              router.push('/404');
                        }
                  } catch (error) {
                        console.error('Error fetching project:', error);
                        router.push('/404');
                  } finally {
                        setLoading(false);
                  }
            };

            if (params.id) {
                  fetchProject(params.id as string);
            }
      }, [params.id, router]);

      const allImages = project ? project.images : [];

      const nextImage = () => {
            setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      };

      const prevImage = () => {
            setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      };

      if (loading) {
            return (
                  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
                        <div className="text-center">
                              <div className="animate-spin rounded-full h-16 w-16 border-4 border-sky-200 border-t-sky-600 mx-auto mb-6"></div>
                              <p className="text-gray-600 text-lg">Loading project...</p>
                        </div>
                  </div>
            );
      }

      if (!project) {
            return (
                  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
                        <div className="text-center max-w-md mx-auto p-8">
                              <div className="w-20 h-20 mx-auto mb-6 text-sky-300">
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                              </div>
                              <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Not Found</h1>
                              <p className="text-gray-600 mb-8 leading-relaxed">The project you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                              <Link
                                    href="/projects"
                                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                              >
                                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                                    Back to Projects
                              </Link>
                        </div>
                  </div>
            );
      }

      return (
            <div className="min-h-screen bg-gradient-to-br from-sky-400 via-white to-blue-400 pt-20">
                  {/* Enhanced Header */}

                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid lg:grid-cols-2 gap-16">
                              {/* Enhanced Image Gallery */}
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-6"
                              >
                                    {/* Main Image with enhanced styling */}
                                    <div className="relative aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl border border-sky-200">
                                          {allImages.length > 0 ? (
                                                <Image
                                                      src={allImages[currentImageIndex]}
                                                      alt={project.title}
                                                      fill
                                                      className="object-cover"
                                                />
                                          ) : (
                                                <div className="flex items-center justify-center h-full">
                                                      <div className="text-center text-sky-400">
                                                            <SparklesIcon className="w-16 h-16 mx-auto mb-3" />
                                                            <p className="text-lg font-medium">No images available</p>
                                                      </div>
                                                </div>
                                          )}

                                          {allImages.length > 1 && (
                                                <>
                                                      <button
                                                            onClick={prevImage}
                                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/95 backdrop-blur-sm text-sky-600 rounded-full hover:bg-white hover:text-sky-700 transition-all shadow-lg border border-sky-100"
                                                      >
                                                            <ChevronLeftIcon className="w-5 h-5" />
                                                      </button>
                                                      <button
                                                            onClick={nextImage}
                                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/95 backdrop-blur-sm text-sky-600 rounded-full hover:bg-white hover:text-sky-700 transition-all shadow-lg border border-sky-100"
                                                      >
                                                            <ChevronRightIcon className="w-5 h-5" />
                                                      </button>

                                                      {/* Enhanced Image counter */}
                                                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/95 backdrop-blur-sm text-sky-700 rounded-full font-semibold border border-sky-100 shadow-lg">
                                                            {currentImageIndex + 1} of {allImages.length}
                                                      </div>
                                                </>
                                          )}
                                    </div>

                                    {/* Enhanced Thumbnail Gallery */}
                                    {allImages.length > 1 && (
                                          <div className="grid grid-cols-4 gap-3">
                                                {allImages.map((image, index) => (
                                                      <button
                                                            key={index}
                                                            onClick={() => setCurrentImageIndex(index)}
                                                            className={`
                      relative aspect-video rounded-xl overflow-hidden transition-all duration-200 border-2 shadow-md hover:shadow-lg
                      ${index === currentImageIndex
                                                                        ? 'border-sky-500 ring-2 ring-sky-200 scale-105'
                                                                        : 'border-sky-200 hover:border-sky-300'
                                                                  }
                    `}
                                                      >
                                                            <Image
                                                                  src={image}
                                                                  alt={`${project.title} ${index + 1}`}
                                                                  fill
                                                                  className="object-cover"
                                                            />
                                                            <div className={`absolute inset-0 transition-opacity ${index === currentImageIndex ? 'bg-sky-500/10' : 'hover:bg-sky-500/5'
                                                                  }`} />
                                                      </button>
                                                ))}
                                          </div>
                                    )}
                              </motion.div>

                              {/* Enhanced Project Info */}
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-8"
                              >
                                    {/* Enhanced Title and Actions */}
                                    <div className="space-y-6">
                                          <div>
                                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                                      {project.title}
                                                </h1>
                                                <div className="flex items-center space-x-4">
                                                      {project.project_category && (
                                                            <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                                                  {project.project_category}
                                                            </span>
                                                      )}
                                                </div>
                                          </div>

                                          <div className="flex flex-wrap gap-4">
                                                {project.demo_url && (
                                                      <a
                                                            href={project.demo_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                                                      >
                                                            <EyeIcon className="w-5 h-5 mr-2" />
                                                            Live Demo
                                                      </a>
                                                )}
                                                {project.github_url && (
                                                      <a
                                                            href={project.github_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-8 py-3 text-xs border-2 border-sky-200 text-sky-700 rounded-xl font-semibold hover:bg-sky-50 hover:border-sky-300 transition-all duration-200 shadow-md hover:shadow-lg"
                                                      >
                                                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                                                            Source Code
                                                      </a>
                                                )}
                                          </div>
                                    </div>

                                    {/* Enhanced Description */}
                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-sky-100">
                                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full mr-4"></div>
                                                About This Project
                                          </h3>
                                          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg mb-5">
                                                {project.description}
                                          </p>
                                          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                <TagIcon className="w-6 h-6 mr-3 text-sky-600" />
                                                Technologies Used
                                          </h3>
                                          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                                                {project.technologies_used.map((tech, index) => (
                                                      <span
                                                            key={index}
                                                            className="text-xs px-4 py-3 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 border border-sky-200 rounded-xl text-center font-semibold hover:from-sky-100 hover:to-blue-100 transition-all duration-200 cursor-default"
                                                      >
                                                            {tech}
                                                      </span>
                                                ))}
                                          </div>

                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </div>
      );
}
